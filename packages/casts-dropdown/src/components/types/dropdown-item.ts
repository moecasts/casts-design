import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

import { DropdownValue } from './dropdown';

export type UseDropdownItemProps = BaseComponentProps & {
  value: DropdownValue;

  hasChildren?: boolean;

  renderChildren?: () => ReactNode;

  onClick?: (option: DropdownValue, event: React.MouseEvent) => void;
};

export type DropdownItemProps = UseDropdownItemProps;
