import { CSSProperties, ReactNode } from 'react';

import { GetPrefixCls } from './get-prefix-cls';

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
