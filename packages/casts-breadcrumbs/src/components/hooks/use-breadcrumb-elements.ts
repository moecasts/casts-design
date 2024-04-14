import { createElement, useMemo } from 'react';

import { BreadcrumbItem } from '../breadcrumb-item';
import { BreadcrumbItemProps } from '../types';

export const useBreadcrumbElements = (items?: BreadcrumbItemProps[]) => {
  const elements = useMemo(() => {
    if (!items) {
      return undefined;
    }

    const itemToElement = (item: BreadcrumbItemProps, idx: number) => {
      const { label, ...rest } = item;
      return createElement(
        BreadcrumbItem,
        {
          ...rest,
          key: `breadcrumb-item-${idx}`,
        },
        label,
      );
    };

    return items.map(itemToElement);
  }, [items]);

  return { elements };
};
