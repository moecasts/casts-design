import { ButtonProps } from './types';

export const defaultButtonProps = {
  variant: 'contained',
  size: 'medium',
  shape: 'round',
  theme: 'brand',
  type: 'button',
} satisfies Partial<ButtonProps>;
