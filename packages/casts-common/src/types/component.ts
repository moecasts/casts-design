import { CSSProperties, ReactNode } from 'react';
import { GetPrefixCls } from '@casts/config-provider';

export type BaseComponentProps = {
  /**
   * class name prefix
   */
  getPrefixCls?: GetPrefixCls;
  /**
   * Content
   */
  children?: ReactNode;
  /**
   * ClassName
   */
  className?: string;
  /**
   * Custom Style
   */
  style?: CSSProperties;
};
