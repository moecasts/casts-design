import { ChangeEvent } from 'react';

export type RadioValue = boolean;

export type ChangeEventContext = {
  type?: 'input';
  e: ChangeEvent<HTMLInputElement>;
};

export type ChangeEventHandler = (
  value: RadioValue,
  context?: ChangeEventContext,
) => void;
