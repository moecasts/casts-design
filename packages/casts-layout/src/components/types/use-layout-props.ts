import type { BaseComponentProps, WithRequired } from '@casts/common';
import type { HTMLAttributes } from 'react';

export type UseLayoutProps = HTMLAttributes<HTMLDivElement> &
  WithRequired<BaseComponentProps, 'getPrefixCls'>;
