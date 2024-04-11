import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

export type SidebarProps = BaseComponentProps & {
  operations?: ReactNode;
};
