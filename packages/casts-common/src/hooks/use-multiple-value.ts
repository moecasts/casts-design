import { ChangeEvent, MouseEvent } from 'react';
import { noop } from 'lodash-es';

import { useControlled } from './use-controlled';

export type Value = boolean | string | number;

export type ChangeEventContext = {
  e?: ChangeEvent<HTMLElement> | MouseEvent<HTMLElement>;
};

export type ChangeEventHandler = (
  value: Value,
  context: ChangeEventContext,
) => void;

export type UseMultipleValueProps = {
  value?: Value[];
  defaultValue?: Value[];
  onChange?: (value: Value[]) => void;
};

export const useMultipleValue = (props: UseMultipleValueProps) => {
  const { onChange: onChangeFromProps = noop } = props;
  const [values = [], onChange] = useControlled(
    props,
    'value',
    onChangeFromProps,
  );

  /** Returns whether the given value is selected. */
  const isSelected = (value: Value) => {
    return values.includes(value);
  };

  /** Adds a value to the set of selected values. */
  const addValue = (value: Value, context: ChangeEventContext = {}) => {
    if (isSelected(value)) {
      return;
    }
    onChange(values.concat(value), context);
  };

  /** Removes a value from the set of selected values. */
  const removeValue = (value: Value, context: ChangeEventContext = {}) => {
    if (!isSelected(value)) {
      return;
    }
    onChange(
      values.filter((selectedValue: Value) => value !== selectedValue),
      context,
    );
  };

  /** Toggles a value in the set of selected values. */
  const toggleValue = (value: Value, context: ChangeEventContext = {}) => {
    if (isSelected(value)) {
      removeValue(value, context);
      return;
    }
    addValue(value, context);
  };

  return {
    value: values,
    onChange,
    isSelected,
    addValue,
    removeValue,
    toggleValue,
  };
};
