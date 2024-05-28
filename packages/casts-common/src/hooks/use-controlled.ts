import { useState } from 'react';
import { noop, upperFirst } from 'lodash-es';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ChangeHandler<T, P extends any[]> {
  (value: T, ...args: P): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useControlled = <T, P extends any[] = any[]>(
  props: Record<PropertyKey, any> = {},
  valueKey: string,
  onChange?: ChangeHandler<T, P>,
  /**
   * use fallbackDefaultValue when defaultValue is not exist
   */
  fallbackDefaultValue?: T,
): [T, ChangeHandler<T, P>] => {
  // is controlled mode when valueKey is exist in props
  const controlled = Reflect.has(props, valueKey);
  // controlled prop
  const value = props[valueKey];
  // The uncontrolled key for a controlled attribute is defaultXxx.
  const defaultValue =
    props[`default${upperFirst(valueKey)}`] ?? fallbackDefaultValue;

  // maintain an internal variable regardless of whether it is controlled, the default value is controlled by defaultValue
  const [internalValue, setInternalValue] = useState(defaultValue);

  // controlled mode
  if (controlled) {
    return [value, onChange || noop];
  }

  // uncontrolled mode
  return [
    internalValue,
    (newValue, ...args) => {
      setInternalValue(newValue);
      onChange?.(newValue, ...args);
    },
  ];
};
