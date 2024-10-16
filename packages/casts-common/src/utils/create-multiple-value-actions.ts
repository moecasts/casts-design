import { ChangeEvent, CompositionEvent, MouseEvent } from 'react';

export type ChangeEventContext = {
  action?: 'clear';

  e?:
    | ChangeEvent<HTMLElement>
    | MouseEvent<HTMLElement>
    | CompositionEvent<HTMLInputElement>;
};

/**
 * Creates a set of actions for managing multiple values.
 */
export const createMultipleValueActions = <T>(
  values: T[],
  onChange: any,
  /** Returns whether the given value is selected. */
  isSelected: (value: T) => boolean = (value) => values.includes(value),
) => {
  /** Adds a value to the set of selected values. */
  const addValue = (value: T, context: ChangeEventContext = {}) => {
    if (isSelected(value)) {
      return;
    }
    onChange(values.concat(value), context);
  };

  /** Removes a value from the set of selected values. */
  const removeValue = (value: T, context: ChangeEventContext = {}) => {
    if (!isSelected(value)) {
      return;
    }
    onChange(
      values.filter((selectedValue: T) => value !== selectedValue),
      context,
    );
  };

  /** Toggles a value in the set of selected values. */
  const toggleValue = (value: T, context: ChangeEventContext = {}) => {
    if (isSelected(value)) {
      removeValue(value, context);
      return;
    }
    addValue(value, context);
  };

  return {
    isSelected,
    addValue,
    removeValue,
    toggleValue,
  };
};
