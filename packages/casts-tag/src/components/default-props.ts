import { TagProps } from './types';

export const defaultTagProps: Partial<TagProps> = {
  theme: 'neutral',
  size: 'medium',
  variant: 'contained',
  pastel: true,
  bordered: false,

  checkedProps: {
    pastel: false,
  },
};
