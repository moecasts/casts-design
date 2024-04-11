import type { BaseComponentProps, WithRequired } from '@casts/common';
import type { HTMLAttributes } from 'react';

export type UseHeaderProps = HTMLAttributes<HTMLDivElement> &
  WithRequired<BaseComponentProps, 'getPrefixCls'>;
