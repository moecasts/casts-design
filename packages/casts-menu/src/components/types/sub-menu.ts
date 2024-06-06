import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';
import { PopupProps } from '@casts/popup';

import { MenuValue } from './common';

export type SubMenuExpandType = 'normal' | 'popup';

export type UseSubMenuProps = BaseComponentProps & {
  disabled?: boolean;

  /**
   * current sub menu level
   * @internal
   */
  level?: number;

  /**
   * Whether to hide the sub-menu after clicking the menu item
   * only works when the sub-menu is in `popup `mode
   *
   * @default true
   */
  hideAfterClick?: boolean;
};

export type SubMenuProps = BaseComponentProps &
  UseSubMenuProps & {
    prefixIcon?: ReactNode;

    expandType?: SubMenuExpandType;

    label?: ReactNode;

    value?: MenuValue;

    popupProps?: Partial<PopupProps>;
  };
