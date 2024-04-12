import { BaseComponentProps, Size } from '@casts/common';

export type PaginationSize = Size;

export enum PaginationItemType {
  Prev = 'prev',
  Dots = 'dots',
  Page = 'page',
  Next = 'next',
}
export type PaginationItemValue = number | PaginationItemType;

export type UsePaginationProps = BaseComponentProps & {
  total: number;
  current?: number;
  pageSize?: number;

  defaultCurrent?: number;
  defaultPageSize?: number;

  size?: PaginationSize;

  pageSizes?: number[];

  /**
   * Whether the pagination should have controls.
   * @default true
   */
  controls?: boolean;

  /**
   * The number of pages that are added or subtracted on the `…` button.
   * @default 5
   */
  dotsJump?: number;

  /**
   * The number of pages to show before and after the current page.
   * @default 1
   */
  siblings?: number;

  /**
   * The number of pages to show at the beginning and end of the pagination.
   * @default 1
   */
  boundaries?: number;

  onCurrentChange?: (current: number) => void;

  onPageSizeChange?: (pageSize: number) => void;

  onChange?: (data: {
    current: number;
    total: number;
    pageSize: number;
  }) => void;
};

export type PaginationProps = UsePaginationProps;
