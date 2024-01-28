import {
  HeadMenuProps,
  MenuContextProps,
  MenuItemProps,
  MenuProps,
} from './types';

export const defaultMenuContext: MenuContextProps = {};

export const defaultMenuProps: Partial<MenuProps> = {
  width: '232px',
  size: 'medium',
  expandType: 'normal',
  popupPlacement: 'right-start',
};

export const defaultHeadMenuProps: Partial<HeadMenuProps> = {
  size: 'medium',
  expandType: 'popup',
  popupPlacement: 'bottom-start',
};

export const defaultMenuItemProps: Partial<MenuItemProps> = {
  activatable: true,
};
