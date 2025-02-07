import { CSSProperties } from 'react';
import { BaseComponentProps, WithRequired } from '@casts/common';

export type UseDialogCardClassesProps = WithRequired<
  BaseComponentProps,
  'getPrefixCls'
> & {
  /**
   * Dialog class name
   */
  dialogClassName?: string;

  /**
   * Dialog style
   */
  dialogStyle?: CSSProperties;

  /**
   * simple	Simple Mode, no dividing line.
   * The Alter Dialog called by the default method will use simple mode.
   * When set to true, the close icon is not display
   */
  simple?: boolean;
};
