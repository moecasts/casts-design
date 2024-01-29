import { BaseComponentProps } from '@casts/common';
import { InputProps, UseInputProps } from '@casts/input';

export type UseInputNumberProps = BaseComponentProps &
  Omit<UseInputProps, 'value' | 'defaultValue' | 'onChange'> & {
    value?: number;

    defaultValue?: number;

    decimal?: number;

    max?: number;

    min?: number;

    step?: number;

    /**
     * Whether to show `+/-` controls
     */
    controls?: boolean;

    onChange?: (value: number | undefined) => void;
  };

export type InputNumberProps = Omit<
  InputProps,
  'value' | 'defaultValue' | 'onChange'
> &
  UseInputNumberProps;
