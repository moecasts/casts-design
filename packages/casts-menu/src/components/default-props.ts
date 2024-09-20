import {
  HeadMenuProps,
  MenuContextProps,
  MenuItemProps,
  MenuProps,
  SubMenuProps,
} from './types';

export const defaultMenuContext = {
  hideAfterClick: true,
} satisfies Partial<MenuContextProps>;

export const defaultMenuProps = {
  width: '232px',
  size: 'medium',
  expandType: 'normal',
  popupPlacement: 'right-start',
  hideAfterClick: true,
} satisfies Partial<MenuProps>;

export const defaultHeadMenuProps = {
  size: 'medium',
  expandType: 'popup',
  popupPlacement: 'bottom-start',
  hideAfterClick: true,
} satisfies Partial<HeadMenuProps>;

export const defaultMenuItemProps = {
  activatable: true,
} satisfies Partial<MenuItemProps>;

export const defaultSubMenuProps = {
  // hideAfterClick: true,
  popupProps: {
    nestedPlacement: 'right-start',
  },
} satisfies SubMenuProps;
