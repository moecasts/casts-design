import { forwardRef, Ref } from 'react';

import { useBreadcrumbSeparator } from './hooks';
import { BreadcrumbSeparatorProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/breadcrumb.scss';

export const BreadcrumbSeparator = forwardRef(
  (props: BreadcrumbSeparatorProps, ref: Ref<HTMLLIElement>) => {
    const { classes, styles, children } = useBreadcrumbSeparator(props);

    return (
      <li aria-hidden className={classes} style={styles} ref={ref}>
        {children}
      </li>
    );
  },
);

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
