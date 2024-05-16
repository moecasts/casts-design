import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

export type UseDropdownItemProps = BaseComponentProps & {
  value: any;

  hasChildren?: boolean;

  renderChildren?: () => ReactNode;
};

export type DropdownItemProps = UseDropdownItemProps;
