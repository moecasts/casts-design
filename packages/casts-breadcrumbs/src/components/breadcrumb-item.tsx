import { forwardRef, Ref } from 'react';
import { useLinkProps } from '@casts/common';

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

    return (
      <li className={classes} style={styles} ref={ref}>
        {content}
      </li>
    );
  },
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
