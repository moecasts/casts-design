import { forwardRef, Ref, useImperativeHandle } from 'react';
import { useLinkProps } from '@casts/common';
import { Tooltip } from '@casts/tooltip';

import { useBreadcrumbItem } from './hooks';
import { BreadcrumbItemProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/breadcrumb.scss';

export const BreadcrumbItem = forwardRef(
  (props: BreadcrumbItemProps, ref: Ref<HTMLLIElement>) => {
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
    } = useBreadcrumbItem(props);

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
      <Tooltip content={children} disabled={!isOverflow}>
        <li className={classes} style={styles} ref={breadcrumbItemRef}>
          {content}
        </li>
      </Tooltip>
    );
  },
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
