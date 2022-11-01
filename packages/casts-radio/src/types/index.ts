import { ChangeEvent, MouseEvent } from 'react';

export type RadioValue = boolean | string | number;

export type ChangeEventContext = {
  type?: 'input';
  e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>;
};

export type ChangeEventHandler = (
  value: RadioValue,
  context: ChangeEventContext,
) => void;
