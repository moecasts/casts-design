import { PaginationProps } from './types';

export const defaultPageSizes = [5, 10, 20, 50, 100];

export const defaultPaginationProps = {
  defaultPageSize: 10,
  dotsJump: 5,
  siblings: 1,
  boundaries: 1,
  controls: true,
  pageSizes: defaultPageSizes,
} satisfies Partial<PaginationProps>;
