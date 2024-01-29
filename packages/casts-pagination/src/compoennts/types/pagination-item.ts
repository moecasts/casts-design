import { BaseComponentProps } from '@casts/common';

export type UsePaginationItemProps = BaseComponentProps & {
  page: number;

  current?: number;

  onChange?: (page: number) => void;
};

export type PaginationItemProps = UsePaginationItemProps;
