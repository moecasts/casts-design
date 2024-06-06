import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps, Placement, Size } from '@casts/common';

import { MenuValue } from './common';
import { MenuObject } from './menu-object';
import { SubMenuExpandType } from './sub-menu';

export type UseHeadMenuProps = BaseComponentProps & {
  size?: Size;

  /**
   * Whether menu automatically collapses when it overflows
   */
  collapse?: boolean;

  /**
   * Whether to hide the sub-menu after clicking the menu item
   * only works when the sub-menu is in `popup `mode
   *
   * @default true
   */
  hideAfterClick?: boolean;
};

export type HeadMenuProps = Omit<HTMLAttributes<HTMLDivElement>, 'prefix'> &
  UseHeadMenuProps & {
    prefix?: ReactNode;
    logo?: ReactNode;
    operations?: ReactNode;

    value?: MenuValue;
    defaultValue?: MenuValue;

    expandType?: SubMenuExpandType;

    /**
     * sub menu popup placement
     */
    popupPlacement?: Placement;

    /**
     * Trigger when the activation menu item changes
     */
    onChange?: (value: MenuValue) => void;

    items?: MenuObject[];
  };
