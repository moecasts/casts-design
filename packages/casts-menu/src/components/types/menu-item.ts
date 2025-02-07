import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { BaseComponentProps, LinkDOMProps } from '@casts/common';

import { MenuValue } from './common';

export type UseMenuItemProps = BaseComponentProps &
  LinkDOMProps & {
    disabled?: boolean;

    value?: MenuValue;

    onClick?: (context: { e: MouseEvent<HTMLElement> }) => void;

    onKeyDown?: (context: { e: KeyboardEvent<HTMLElement> }) => void;

    activatable?: boolean;

    focusable?: boolean;

    label?: ReactNode;

    hideAfterClick?: boolean;
  };

export type MenuItemProps = UseMenuItemProps & {
  prefixIcon?: ReactNode;

  suffixIcon?: ReactNode;

  href?: string;
};
