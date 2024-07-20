import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';
import { PopupProps } from '@casts/popup';

import { DropdownClickHandler, DropdownValue } from './common';

export type UseDropdownItemProps = BaseComponentProps & {
  /**
   * The value of the dropdown item.
   */
  value: DropdownValue;
  /**
   * Whether the dropdown item has children or not.
   */
  hasChildren?: boolean;
  /**
   * A function to render the children of the dropdown item.
   */
  renderChildren?: () => ReactNode;
  /**
   * The function to handle dropdown item click events.
   */
  onClick?: DropdownClickHandler;
  /**
   * Whether the dropdown item is open or not.
   */
  open?: PopupProps['visible'];
  /**
   * The default open state of the dropdown item.
   */
  defaultOpen?: PopupProps['defaultVisible'];
  /**
   * The function to handle changes in the open state of the dropdown item.
   */
  onOpenChange?: PopupProps['onVisibleChange'];
};

export type DropdownItemProps = UseDropdownItemProps;
