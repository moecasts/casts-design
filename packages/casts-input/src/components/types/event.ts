import { CompositionEvent, ChangeEvent as ReactChangeEvent } from 'react';

export type InputValue = string | number;

export type ChangeEventContext = {
  type?: 'input';
  e?: ReactChangeEvent<HTMLInputElement> | CompositionEvent<HTMLInputElement>;
};

export type ChangeEventHandler = (
  value: InputValue,
  context: ChangeEventContext,
) => void;
