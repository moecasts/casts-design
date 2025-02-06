import { SelectProps, SelectVirtual } from './types';

export const getDefaultVirtual = () =>
  ({
    threshold: 100,
  }) satisfies Partial<SelectVirtual>;

export const defaultSelectProps = {
  virtual: getDefaultVirtual(),

  size: 'medium',

  showFlipArrow: true,
} satisfies Partial<SelectProps>;
