import { useState } from 'react';
import { noop, upperFirst } from 'lodash-es';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ChangeHandler<T, P extends any[]> {
  (value: T, ...args: P): void;
}

export const useControlled = <
  T extends Exclude<R[K], undefined>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends any[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  R extends Record<string, any>,
  K extends keyof R,
>(
  props: R,
  valueKey: K,
  onChange?: ChangeHandler<Exclude<R[K], undefined>, P>,
  /**
   * use fallbackDefaultValue when defaultValue is not exist
   */
  fallbackDefaultValue?: Exclude<R[K], undefined>,
): [T, ChangeHandler<Exclude<R[K], undefined>, P>] => {
  // is controlled mode when valueKey is exist in props
  const controlled = Reflect.has(props, valueKey);
  // control as unknown prop
  const value = props[valueKey];
  // The uncontrolled key for a controlled attribute is defaultXxx.
  const defaultValue: any =
    props[`default${upperFirst(valueKey as unknown as string)}`] ??
    fallbackDefaultValue;

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
