import { CSSProperties, ReactNode } from 'react';
import { GetPrefixCls } from '@casts/config-provider';

export type BaseComponentProps = {
  getPrefixCls?: GetPrefixCls;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};
