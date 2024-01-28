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
};

export type SubMenuProps = BaseComponentProps &
  UseSubMenuProps & {
    prefixIcon?: ReactNode;

    expandType?: SubMenuExpandType;

    label?: ReactNode;

    value?: MenuValue;

    popupProps?: Partial<PopupProps>;
  };
