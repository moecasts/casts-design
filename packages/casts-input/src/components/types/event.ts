import { ChangeEvent, CompositionEvent, MouseEvent } from 'react';

export type InputValue = string | number;

export type ChangeEventContext = {
  type?: 'input';
  e?:
    | ChangeEvent<HTMLInputElement>
    | CompositionEvent<HTMLInputElement>
    | MouseEvent<HTMLElement>;
};

export type ChangeEventHandler<T = InputValue> = (
  value: T,
  context: ChangeEventContext,
) => void;
