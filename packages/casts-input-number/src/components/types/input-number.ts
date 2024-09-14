import { ChangeEvent, CompositionEvent, MouseEvent } from 'react';
import { BaseComponentProps } from '@casts/common';
import { InputProps, UseInputProps } from '@casts/input';

export type InputNumberValue = number;

export type ChangeEventContext = {
  type?: 'input';
  e?:
    | ChangeEvent<HTMLInputElement>
    | CompositionEvent<HTMLInputElement>
    | MouseEvent<HTMLElement>;
};

export type ChangeEventHandler<T = InputNumberValue | undefined> = (
  value: T,
  context: ChangeEventContext,
) => void;

export type UseInputNumberProps = BaseComponentProps &
  Omit<UseInputProps, 'value' | 'defaultValue' | 'onChange'> & {
    value?: InputNumberValue;

    defaultValue?: InputNumberValue;

    decimal?: number;

    max?: number;

    min?: number;

    step?: number;

    /**
     * Whether to show `+/-` controls
     */
    controls?: boolean;

    onChange?: (value: InputNumberValue | undefined) => void;
  };

export type InputNumberProps = Omit<
  InputProps,
  'value' | 'defaultValue' | 'onChange'
> &
  UseInputNumberProps;
