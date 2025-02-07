import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

export type UseMenuGroupProps = BaseComponentProps;

export type MenuGroupProps = UseMenuGroupProps & {
  label: ReactNode;
};
