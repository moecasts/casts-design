import { ReactNode } from 'react';
import { BaseComponentProps, Size } from '@casts/common';

export type TagTheme =
  | 'brand'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral';

export type TagSize = Size;

export type TagVariant = 'contained' | 'outline' | 'dashed';

export type CheckedProps = {
  theme?: TagTheme;
  variant?: TagVariant;
  pastel?: boolean;
  bordered?: boolean;
};

export type UseTagProps = BaseComponentProps & {
  theme?: TagTheme;

  size?: TagSize;

  variant?: TagVariant;

  closeable?: boolean;

  disabled?: boolean;

  /**
   * pastel theme(only works when variant is contained)
   * @default true
   */
  pastel?: boolean;

  /**
   * border visible?
   * only works when pastel is `true`
   * @default false
   */
  bordered?: boolean;

  checkable?: boolean;

  checked?: boolean;

  defaultChecked?: boolean;

  checkedProps?: CheckedProps;

  prefix?: ReactNode;

  suffix?: ReactNode;

  /**
   * callback when checked changed
   */
  onChange?: (checked: boolean) => void;

  /**
   * callback when close button clicked
   */
  onClose?: () => void;
};

export type TagProps = UseTagProps;
