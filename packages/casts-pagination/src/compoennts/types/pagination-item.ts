import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

import { PaginationItemValue } from './pagination';

export type UsePaginationItemProps = BaseComponentProps & {
  page: PaginationItemValue;

  current?: number;

  disabled?: boolean;

  onChange?: (page: PaginationItemValue) => void;

  render?: (page: PaginationItemValue) => ReactNode;
};

export type PaginationItemProps = UsePaginationItemProps;
