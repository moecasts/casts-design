import { SelectProps } from './types';

export const getDefaultVirtual = () => ({
  threshold: 100,
});

export const defaultSelectProps: Partial<SelectProps> = {
  virtual: getDefaultVirtual(),
};
