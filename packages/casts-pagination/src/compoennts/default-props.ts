import { PaginationProps } from './types';

export const defaultPaginationProps = {
  dotsJump: 5,
  siblings: 1,
  boundaries: 1,
  controls: true,
} satisfies Partial<PaginationProps>;
