import type { BaseComponentProps, WithRequired } from '@casts/common';
import type { HTMLAttributes } from 'react';

export type UseContentProps = HTMLAttributes<HTMLDivElement> &
  WithRequired<BaseComponentProps, 'getPrefixCls'>;
