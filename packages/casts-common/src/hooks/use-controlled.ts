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
  onChange: ChangeHandler<T, P>,
): [T, ChangeHandler<T, P>] => {
  // 外部设置 props，说明希望受控
  const controlled = Reflect.has(props, valueKey);
  // 受控属性
  const value = props[valueKey];
  // 约定受控属性的非受控 key 为 defaultXxx
  const defaultValue = props[`default${upperFirst(valueKey)}`];

  // 无论是否受控，都要维护一个内部变量，默认值由 defaultValue 控制
  const [internalValue, setInternalValue] = useState(defaultValue);

  // 受控模式
  if (controlled) {
    return [value, onChange || noop];
  }

  // 非受控模式
  return [
    internalValue,
    (newValue, ...args) => {
      setInternalValue(newValue);
      onChange?.(newValue, ...args);
    },
  ];
};