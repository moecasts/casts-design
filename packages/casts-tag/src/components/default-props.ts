import { TagProps } from './types';

export const defaultTagProps = {
  theme: 'neutral',
  size: 'medium',
  variant: 'contained',
  pastel: true,
  bordered: false,

  checkedProps: {
    pastel: false,
  },
} satisfies Partial<TagProps>;
