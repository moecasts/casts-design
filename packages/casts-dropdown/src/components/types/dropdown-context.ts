import { Size } from '@casts/common';

import { DropdownClickHandler } from './common';

export type DropdownContextValue = {
  /**
   * Whether the dropdown is open or not.
   */
  open?: boolean;
  /**
   * The size of the dropdown.
   */
  size?: Size;
  /**
   * The maximum height of the dropdown.
   */
  maxHeight?: string | number;
  /**
   * The minimum width of the dropdown column.
   */
  minColumnWidth?: string | number;
  /**
   * The maximum width of the dropdown column.
   */
  maxColumnWidth?: string | number;
  /**
   * The function to handle dropdown item click events.
   */
  handleClick?: DropdownClickHandler;
};
