import { SetStateAction, useState } from 'react';
import { isFunction, upperFirst } from 'lodash-es';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ChangeHandler<T, P extends any[]> {
  (value: T, ...args: P): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useControlledWithUpdater = <T, P extends any[] = any[]>(
  props: Record<PropertyKey, any> = {},
  valueKey: string,
  onChange: ChangeHandler<T, P>,
  /**
   * use fallbackDefaultValue when defaultValue is not exist
   */
  fallbackDefaultValue?: T,
): [T, ChangeHandler<T, P>] => {
  const value = props[valueKey];

  // The uncontrolled key for a controlled attribute is defaultXxx.
  const defaultValue =
    props[`default${upperFirst(valueKey)}`] ?? fallbackDefaultValue;

  const [internalValue, setInternalValue] = useState<T>(defaultValue);

  // is controlled mode when valueKey is exist in props
  const controlled = Reflect.has(props, valueKey);

  const getNextValue = (updaterOrValue: SetStateAction<T>, prevValue: T): T => {
    const nextValue = isFunction(updaterOrValue)
      ? updaterOrValue(prevValue)
      : updaterOrValue;

    return nextValue;
  };

  const setValue = (updaterOrValue: SetStateAction<T>, ...args: P) => {
    if (controlled) {
      const nextValue = getNextValue(updaterOrValue, value);
      onChange?.(nextValue, ...args);
      return;
    }

    setInternalValue((prevValue) => {
      const nextValue = getNextValue(updaterOrValue, prevValue);

      onChange?.(nextValue, ...args);
      return nextValue;
    });
  };

  if (controlled) {
    return [value, setValue];
  }

  return [internalValue, setValue];
};
