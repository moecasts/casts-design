import {
  HeadMenuProps,
  MenuContextProps,
  MenuItemProps,
  MenuProps,
} from './types';

export const defaultMenuContext = {} satisfies Partial<MenuContextProps>;

export const defaultMenuProps = {
  width: '232px',
  size: 'medium',
  expandType: 'normal',
  popupPlacement: 'right-start',
} satisfies Partial<MenuProps>;

export const defaultHeadMenuProps = {
  size: 'medium',
  expandType: 'popup',
  popupPlacement: 'bottom-start',
} satisfies Partial<HeadMenuProps>;

export const defaultMenuItemProps = {
  activatable: true,
} satisfies Partial<MenuItemProps>;
