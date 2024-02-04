import { BaseComponentProps } from '@casts/common';
import { UseInputProps } from '@casts/input';

export type UseInputNumberProps = BaseComponentProps &
  Omit<UseInputProps, 'value' | 'defaultValue'> & {
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
  };

export type InputNumberProps = UseInputNumberProps;
