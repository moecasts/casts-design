import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';
import { PopupProps } from '@casts/popup';

import { DropdownClickHandler, DropdownValue } from './common';

export type UseDropdownItemProps = BaseComponentProps & {
  value: DropdownValue;

  hasChildren?: boolean;

  renderChildren?: () => ReactNode;

  onClick?: DropdownClickHandler;

  open?: PopupProps['visible'];
  defaultOpen?: PopupProps['defaultVisible'];
  onOpenChange?: PopupProps['onVisibleChange'];
};

export type DropdownItemProps = UseDropdownItemProps;
