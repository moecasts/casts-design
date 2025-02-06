import { ReactNode } from 'react';
import { BaseComponentProps, Placement, Size } from '@casts/common';
import { PopupProps } from '@casts/popup';

import { DropdownClickHandler, DropdownOption } from './common';

/**
 * Props for using a dropdown
 */
export type UseDropdownProps = BaseComponentProps & {
  /**
   * The options for the dropdown
   */
  options?: DropdownOption[];
  /**
   * A function to render custom content
   */
  renderContent?: () => ReactNode;
  /**
   * The size of the dropdown
   */
  size?: Size;
  /**
   * The maximum height of the dropdown
   */
  maxHeight?: string | number;
  /**
   * The minimum width of the dropdown column
   */
  minColumnWidth?: string | number;
  /**
   * The maximum width of the dropdown column
   */
  maxColumnWidth?: string | number;
  /**
   * Whether the dropdown is visible
   */
  visible?: boolean;
  /**
   * Props for the popup component
   */
  popupProps?: Partial<PopupProps>;
  /**
   * The trigger for the popup
   */
  trigger?: PopupProps['trigger'];
  /**
   * Whether the popup is open
   */
  open?: PopupProps['visible'];
  /**
   * The default visibility of the popup
   */
  defaultOpen?: PopupProps['defaultVisible'];
  /**
   * A callback function for when the popup's visibility changes
   */
  onOpenChange?: PopupProps['onVisibleChange'];
  /**
   * The placement of the popup
   */
  placement?: Placement;

  /**
   * The placement of the nested popup
   */
  nestedPlacement?: Placement;

  /**
   * The click handler for the dropdown
   */
  onClick?: DropdownClickHandler;

  /**
   * Hide the overlay after clicking an option
   */
  hideAfterClick?: boolean;
};

/**
 * Dropdown props type
 */
export type DropdownProps = UseDropdownProps;
