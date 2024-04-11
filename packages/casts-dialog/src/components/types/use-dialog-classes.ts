import { CSSProperties } from 'react';
import { BaseComponentProps, WithRequired } from '@casts/common';

export type UseDialogClassesProps = WithRequired<
  BaseComponentProps,
  'getPrefixCls'
> & {
  /**
   * Centered dialog
   */
  centered?: boolean;

  /**
   * Dialog root class name
   */
  rootClassName?: string;

  /**
   * Mask class name
   */
  maskClassName?: CSSProperties;

  /**
   * Mask style
   */
  maskStyle?: CSSProperties;
};
