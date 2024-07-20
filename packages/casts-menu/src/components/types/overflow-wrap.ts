import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

export type UseOverflowWrapProps = BaseComponentProps & {
  renderCollapse?: (props: { children: ReactNode }) => ReactNode;
};

export type OverflowWrapProps = BaseComponentProps & UseOverflowWrapProps;
