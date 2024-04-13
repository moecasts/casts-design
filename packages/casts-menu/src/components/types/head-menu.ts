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
