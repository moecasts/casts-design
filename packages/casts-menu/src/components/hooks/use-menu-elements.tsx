import { createElement, ReactNode, useMemo } from 'react';
import { isUndefined, traverse } from '@casts/common';

import { MenuGroup } from '../menu-group';
import { MenuItem } from '../menu-item';
import { SubMenu } from '../sub-menu';
import { MenuObject } from '../types';

/**
 * convert menu data to menu elements
 *
 * @param {MenuObject[]} [items]
 */
export const useMenuElements = (items?: MenuObject[]) => {
  const elements = useMemo(() => {
    if (!items) {
      return undefined;
    }

    const itemToElement = (item: MenuObject) => {
      const { type, children, ...props } = item;

      if (type === 'group') {
        return createElement(MenuGroup, props, children as ReactNode);
      }

      if (isUndefined(children)) {
        return createElement(MenuItem, props);
      }

      return createElement(SubMenu, props, children as ReactNode);
    };

    if (!items) {
      return;
    }

    const nodes = traverse({
      tree: items,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      iterator: itemToElement as any,
    }) as ReactNode[];

    return nodes;
  }, [items]);

  return {
    elements,
  };
};
