import { ChangeEvent, CSSProperties, MouseEvent, ReactNode } from 'react';
import { Direction } from '@casts/common';

import { useCheckboxGroupState } from '../hooks';

export type CheckboxValue = boolean | string | number;

export type ChangeEventContext = {
  type?: 'input';
  e?: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>;
};

export type ChangeEventHandler = (
  value: CheckboxValue,
  context: ChangeEventContext,
) => void;

export type CustomCheckboxComponentFunction = ({
  checked,
}: {
  checked: boolean;
}) => ReactNode;

export type CheckboxProps = {
  children?: ReactNode | CustomCheckboxComponentFunction;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
  checked?: CheckboxValue;
  defaultChecked?: CheckboxValue;
  value?: CheckboxValue;
  name?: string;
  /**
   * The indeterminate checked state of checkbox
   * @default false
   */
  indeterminate?: boolean;
};

export type GroupChangeEventHandler = (
  value: CheckboxValue[],
  context: ChangeEventContext,
) => void;

export type CheckboxGroupProps = {
  defaultValue?: CheckboxValue[];
  value?: CheckboxValue[];
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  onChange?: GroupChangeEventHandler;
  style?: CSSProperties;
  type?: 'checkbox';
  /**
   * checkbox placement direction
   * @default horizontal
   */
  direction?: Direction;
};

export type CheckboxGroupContextProps = {
  disabled?: boolean;
  group?: boolean;
  name?: CheckboxGroupProps['name'];
  onChange?: GroupChangeEventHandler;
  type: 'checkbox' | 'button';
  value?: CheckboxValue[];
} & Partial<ReturnType<typeof useCheckboxGroupState>>;
