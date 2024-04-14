import { forwardRef, Ref } from 'react';
import { arrayInsertInterval, isArray } from '@casts/common';
import { ArrowRightSLine } from '@casts/icons';

import { BreadcrumbSeparator } from './breadcrumb-separator';
import { useBreadcrumb } from './hooks';
import { useBreadcrumbElements } from './hooks/use-breadcrumb-elements';
import { BreadcrumbProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/breadcrumb.scss';

export const Breadcrumbs = forwardRef(
  (props: BreadcrumbProps, ref: Ref<HTMLOListElement>) => {
    const { classes, styles, items, children, separator } =
      useBreadcrumb(props);

    const getBreadcrumbItems = (items?: any) => {
      const elements = arrayInsertInterval(
        items,
        (idx: number) => (
          <BreadcrumbSeparator key={`breadcrumb-separator-${idx}`}>
            {separator ?? <ArrowRightSLine />}
          </BreadcrumbSeparator>
        ),
        1,
      );
      return elements;
    };

    const { elements } = useBreadcrumbElements(items);

    const content =
      (children && (isArray(children) ? children : [children])) ||
      elements ||
      [];

    const breadcrumbItems = getBreadcrumbItems(content);

    return (
      <ol className={classes} style={styles} ref={ref}>
        {breadcrumbItems}
      </ol>
    );
  },
);

Breadcrumbs.displayName = 'Breadcrumbs';
