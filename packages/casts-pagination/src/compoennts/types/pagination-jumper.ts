import { BaseComponentProps } from '@casts/common';

export type UsePaginationJumperProps = BaseComponentProps & {
  /**
   * style like **Goto** n / total **page**
   * @default false
   */
  label?: boolean;

  current: number;
  pageCount: number;

  onCurrentConfirmChange?: (value: number | undefined) => void;
};

export type PaginationJumperProps = UsePaginationJumperProps;
