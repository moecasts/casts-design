import { noop, useControlled } from '@casts/hooks';
import {
  ChangeEventContext,
  CheckboxGroupProps,
  CheckboxValue,
} from '../types';

export const useCheckboxGroupState = (props: CheckboxGroupProps) => {
  const { onChange: onChangeFromProps = noop } = props;
  const [values, onChange] = useControlled(
    props,
    'value',
    onChangeFromProps,
    [],
  );

  /** Returns whether the given value is selected. */
  const isSelected = (value: CheckboxValue) => {
    return values.includes(value);
  };

  /** Adds a value to the set of selected values. */
  const addValue = (value: CheckboxValue, context: ChangeEventContext = {}) => {
    if (isSelected(value)) {
      return;
    }
    onChange(values.concat(value), context);
  };

  /** Removes a value from the set of selected values. */
  const removeValue = (
    value: CheckboxValue,
    context: ChangeEventContext = {},
  ) => {
    if (!isSelected(value)) {
      return;
    }
    onChange(
      values.filter((selectedValue) => value !== selectedValue),
      context,
    );
  };

  /** Toggles a value in the set of selected values. */
  const toggleValue = (
    value: CheckboxValue,
    context: ChangeEventContext = {},
  ) => {
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
