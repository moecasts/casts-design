import { forwardRef, Ref, useImperativeHandle } from 'react';
import { useDefaultProps, useLinkProps } from '@casts/common';
import { Tooltip } from '@casts/tooltip';

import { BreadcrumbSeparator } from './breadcrumb-separator';
import { defaultBreadcrumbItemProps } from './default-props';
import { useBreadcrumbItem } from './hooks';
import { BreadcrumbItemProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/breadcrumb.scss';

export const BreadcrumbItem = forwardRef(
  (props: BreadcrumbItemProps, ref: Ref<HTMLLIElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultBreadcrumbItemProps);

    const {
      classes,
      styles,
      children,
      icon,
      linkClasses,
      contentClasses,
      iconClasses,
      handleLinkClick,
      breadcrumbItemRef,
      isOverflow,
      separator,
      shouldRenderSeparator,
      tooltipProps,
    } = useBreadcrumbItem(propsWithDefault);

    const linkProps = useLinkProps(props);

    let content = (
      <>
        {icon && <span className={iconClasses}>{icon}</span>}
        <span className={contentClasses}>{children}</span>
      </>
    );

    if (linkProps.href) {
      content = (
        <a
          {...linkProps}
          className={linkClasses}
          href={linkProps.href}
          onClick={handleLinkClick}
        >
          {content}
        </a>
      );
    }

    useImperativeHandle(ref, () => breadcrumbItemRef.current as HTMLLIElement);

    return (
      <>
        <Tooltip content={children} disabled={!isOverflow} {...tooltipProps}>
          <li className={classes} style={styles} ref={breadcrumbItemRef}>
            {content}
          </li>
        </Tooltip>
        {shouldRenderSeparator && (
          <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
        )}
      </>
    );
  },
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
