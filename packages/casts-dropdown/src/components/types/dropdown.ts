import { ReactNode } from 'react';
import { BaseComponentProps, Size } from '@casts/common';
import { PopupProps } from '@casts/popup';

export type DropdownValue = any;

export type DropdownOption = {
  label: ReactNode;
  value: DropdownValue;
  children?: DropdownOption[];
} & Record<string, any>;

export type UseDropdownProps = BaseComponentProps & {
  options?: DropdownOption[];
  renderContent?: () => ReactNode;
  size?: Size;
  maxHeight?: string | number;
  minColumnWidth?: string | number;
  maxColumnWidth?: string | number;
  visible?: boolean;
  popupProps?: Partial<PopupProps>;
};

export type DropdownProps = UseDropdownProps;
