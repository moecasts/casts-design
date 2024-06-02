import { KeyboardEvent, MouseEvent, ReactNode } from 'react';

/**
 * Dropdown value type
 */
export type DropdownValue = any;

export type DropdownOptionItem = {
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
  children?: DropdownOptionItem[];
};

export type DropdownOptionDivider = {
  /**
   * The type of the dropdown divider
   */
  type: 'divider';
};

export type DropdownOptionSection = {
  /**
   * The title of the dropdown section.
   */
  label: ReactNode;

  /*&
   * The type of the dropdown section
   */
  type: 'section';

  /**
   * The children options
   */
  children: DropdownOptionItem[];
};

/**
 * Dropdown option type
 */
export type DropdownOption = (
  | DropdownOptionSection
  | DropdownOptionItem
  | DropdownOptionDivider
) &
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Record<string, any>;

export type DropdownClickHandler = (
  option: DropdownValue,
  context: {
    event: MouseEvent | KeyboardEvent;
  },
) => void;
