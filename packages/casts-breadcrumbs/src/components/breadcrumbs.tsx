import {
  Children,
  cloneElement,
  forwardRef,
  ReactElement,
  Ref,
  useMemo,
} from 'react';
import { log, useDefaultProps } from '@casts/common';
import { MoreLine } from '@casts/icons';

import { BreadcrumbItem } from './breadcrumb-item';
import { BreadcrumbsProvider } from './breadcrumbs-context';
import { defaultBreadcrumbsProps } from './default-props';
import { useBreadcrumbs } from './hooks';
import { useBreadcrumbElements } from './hooks/use-breadcrumb-elements';
import { BreadcrumbItemProps, BreadcrumbsProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/breadcrumb.scss';

const _Breadcrumbs = forwardRef(
  (props: BreadcrumbsProps, ref: Ref<HTMLOListElement>) => {
    const {
      classes,
      styles,
      routes,
      children,
      maxCount = 0,
      countAfterCollapse = 0,
      countBeforeCollapse = 0,
      collapseClasses,
    } = useBreadcrumbs(props);

    const { elements } = useBreadcrumbElements(routes);

    const content = useMemo(() => {
      const getItems = () => {
        let items = (elements || Children.toArray(children)) as unknown as
          | ReactElement<BreadcrumbItemProps>[]
          | undefined;

        const itemsCount = items?.length || 0;

        if (!items || !maxCount) {
          return items;
        }

        if (maxCount >= itemsCount) {
          return items;
        }

        if (
          maxCount &&
          (countAfterCollapse || 0) + (countBeforeCollapse || 0) >= maxCount
        ) {
          log.warn(
            `You have provided an invalid combination of props to the Breadcrumbs. maxCount={${maxCount}} <= countBeforeCollapse={${countBeforeCollapse}} + countAfterCollapse={${countAfterCollapse}}`,
          );

          return items;
        }

        const startCount = countBeforeCollapse;
        const endCount = countAfterCollapse;

        items = [
          ...items.slice(0, startCount),
          <BreadcrumbItem
            key={'breadcrumbs-collapse'}
            className={collapseClasses}
          >
            <MoreLine />
          </BreadcrumbItem>,
          ...items.slice(itemsCount - endCount),
        ];

        return items;
      };

      let items = getItems();
      const lastItemIdx = (items?.length || 0) - 1;

      items = items?.map((child, idx) => {
        const isLast = idx === lastItemIdx;
        const key = child?.key || idx;

        return cloneElement(child, {
          key,
          shouldRenderSeparator: isLast
            ? false
            : child.props.shouldRenderSeparator,
        });
      });

      return items;
    }, [
      children,
      elements,
      maxCount,
      countAfterCollapse,
      countBeforeCollapse,
      collapseClasses,
    ]);

    return (
      <ol className={classes} style={styles} ref={ref}>
        {content}
      </ol>
    );
  },
);

_Breadcrumbs.displayName = '_Breadcrumbs';

export const Breadcrumbs = forwardRef(
  (props: BreadcrumbsProps, ref: Ref<HTMLOListElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultBreadcrumbsProps);

    return (
      <BreadcrumbsProvider {...propsWithDefault}>
        <_Breadcrumbs {...propsWithDefault} ref={ref} />
      </BreadcrumbsProvider>
    );
  },
);

Breadcrumbs.displayName = 'Breadcrumbs';
