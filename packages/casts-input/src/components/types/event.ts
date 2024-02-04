import { ChangeEvent, CompositionEvent, MouseEvent } from 'react';

export type InputValue = string;

export type ChangeEventContext = {
  type?: 'input';
  e?:
    | ChangeEvent<HTMLInputElement>
    | CompositionEvent<HTMLInputElement>
    | MouseEvent<HTMLElement>;
};

export type ChangeEventHandler = (
  value: InputValue,
  context: ChangeEventContext,
) => void;
