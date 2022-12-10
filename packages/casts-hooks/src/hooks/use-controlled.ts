import { useState } from 'react';
import { noop, upperFirst } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ChangeHandler<T, P extends any[]> {
  (value: T, ...args: P): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useControlled = <T, P extends any[]>(
  props: object = {},
  valueKey: string,
  onChange: ChangeHandler<T, P>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultVal?: any,
): [T, ChangeHandler<T, P>] => {
  // 外部设置 props，说明希望受控
  const controlled = Reflect.has(props, valueKey);
  // 受控属性
  const value = props[valueKey];
  // 约定受控属性的非受控 key 为 defaultXxx
  const defaultValue = props[`default${upperFirst(valueKey)}`] || defaultVal;

  // 无论是否受控，都要维护一个内部变量，默认值由 defaultValue 控制
  const [internalValue, setInternalValue] = useState(defaultValue);

  // 受控模式
  if (controlled) return [value, onChange || noop];

  // 非受控模式
  return [
    internalValue,
    (newValue, ...args) => {
      setInternalValue(newValue);
      onChange?.(newValue, ...args);
    },
  ];
};
