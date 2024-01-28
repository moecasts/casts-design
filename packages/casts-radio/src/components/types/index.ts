import { ChangeEvent, CSSProperties, MouseEvent, ReactNode } from 'react';

export type RadioValue = boolean | string | number;

export type ChangeEventContext = {
  type?: 'input';
  e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>;
};

export type ChangeEventHandler = (
  value: RadioValue,
  context: ChangeEventContext,
) => void;

export type RadioGroupProps = {
  defaultValue?: RadioValue;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  onChange?: ChangeEventHandler;
  style?: CSSProperties;
  type?: 'radio' | 'button';
};

export interface RadioGroupContextProps {
  disabled?: boolean;
  group?: boolean;
  name?: RadioGroupProps['name'];
  onChange?: ChangeEventHandler;
  type: 'radio' | 'button';
  value?: RadioValue;
}
