import type { ReactElement } from 'react';

import { MenuItem } from '../menu-item';
import { SubMenu } from '../sub-menu';

export const isSubMenu = (child: ReactElement) => {
  if (!child) {
    return false;
  }
  const { displayName } = child.type as typeof MenuItem | typeof SubMenu;
  return displayName === SubMenu.displayName;
};

export const isMenuItem = (child: React.ReactElement) => {
  if (!child) {
    return false;
  }
  const { displayName } = child.type as typeof MenuItem | typeof SubMenu;
  return displayName === MenuItem.displayName;
};
