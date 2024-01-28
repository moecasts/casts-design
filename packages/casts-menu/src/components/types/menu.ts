import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps, Placement, Size } from '@casts/common';

import { MenuValue } from './common';
import { MenuObject } from './menu-object';
import { SubMenuExpandType } from './sub-menu';

export type UseMenuProps = BaseComponentProps & {
  width?: number | string | undefined;

  size?: Size;

  /**
   * Whether menu automatically collapses when it overflows
   */
  collapse?: boolean;

  /**
   * Trigger when the activation menu item changes
   */
  onChange?: (value: MenuValue) => void;
};

export type MenuProps = HTMLAttributes<HTMLDivElement> &
  UseMenuProps & {
    logo?: ReactNode;
    operations?: ReactNode;

    value?: MenuValue;
    defaultValue?: MenuValue;

    expandType?: SubMenuExpandType;

    /**
     * sub menu popup placement
     */
    popupPlacement?: Placement;

    items?: MenuObject[];
  };
