import { Dispatch, SetStateAction } from 'react';
import { BaseComponentProps, Placement, Size } from '@casts/common';

import { MenuValue } from './common';
import { SubMenuExpandType } from './sub-menu';

export type MenuState = {
  active?: MenuValue;
  expanded?: MenuValue[];
  collapsed?: boolean;
};

export type SetMenuState = Dispatch<SetStateAction<MenuState>>;

export type MenuContextProps = MenuState & {
  setState?: SetMenuState;

  size?: Size;

  expandType?: SubMenuExpandType;

  popupPlacement?: Placement;

  collapse?: boolean;

  /**
   * Trigger when the activation menu item changes
   */
  onChange?: (value: MenuValue) => void;

  hideAfterClick?: boolean;
};

export type UseMenuProviderProps = MenuContextProps &
  MenuState & {
    value?: MenuValue;
    defaultValue?: MenuValue;
  };

export type MenuProviderProps = BaseComponentProps & UseMenuProviderProps;

/* --------------------------------- Sub Menu Context ---------------------------------------- */
export type SubMenuContextProps = {
  open?: boolean;

  popupOpen?: boolean;

  onOpenChange?: (open: boolean) => void;

  disabled?: boolean;

  level?: number;

  expandType?: SubMenuExpandType;

  hideAfterClick?: boolean;
};

export type SubMenuProviderProps = BaseComponentProps & SubMenuContextProps;
