import { KeyboardEvent, MouseEvent, ReactNode } from 'react';

/**
 * Dropdown value type
 */
export type DropdownValue = any;

/**
 * Dropdown option type
 */
export type DropdownOption = {
  /**
   * The text to display for the option
   */
  label: ReactNode;
  /**
   * The value of the option
   */
  value: DropdownValue;
  /**
   * The children options
   */
  children?: DropdownOption[];
} & Record<string, any>;

export type DropdownClickHandler = (
  option: DropdownValue,
  context: {
    event: MouseEvent | KeyboardEvent;
  },
) => void;
