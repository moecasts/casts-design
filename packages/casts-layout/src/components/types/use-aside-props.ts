import type { BaseComponentProps, WithRequired } from '@casts/common';
import type { HTMLAttributes } from 'react';

export type UseAsideProps = HTMLAttributes<HTMLDivElement> &
  WithRequired<BaseComponentProps, 'getPrefixCls'>;
