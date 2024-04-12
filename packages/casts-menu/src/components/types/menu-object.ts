import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';
import { PopupProps } from '@casts/popup';

import { MenuValue } from './common';
import { SubMenuExpandType } from './sub-menu';

export type MenuObject = Omit<BaseComponentProps, 'children'> & {
  key: string | number;

  type?: 'group';

  children?: MenuObject[];

  disabled?: boolean;

  value?: MenuValue;

  onClick?: (context: { e: MouseEvent<HTMLElement> }) => void;

  onKeyDown?: (context: { e: KeyboardEvent<HTMLElement> }) => void;

  activatable?: boolean;

  focusable?: boolean;

  label: ReactNode;

  prefixIcon?: ReactNode;

  suffixIcon?: ReactNode;

  href?: string;

  expandType?: SubMenuExpandType;

  popupProps?: Partial<PopupProps>;
};
