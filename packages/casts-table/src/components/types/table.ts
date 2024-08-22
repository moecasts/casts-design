import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';
import {
  ColumnDef,
  ColumnDefTemplate,
  HeaderContext,
  RowSelectionState,
} from '@tanstack/react-table';

export type UseTableProps<T = object> = BaseComponentProps & {
  loading?: boolean;

  /** table columns */
  columns: Column<T>[];

  /** table data */
  data?: Array<T>;

  /** Whether to show table bordered */
  bordered?: boolean;

  /** Whether to show stripe style */
  stripe?: boolean;

  /** Whether to display the table cell border */
  cellBordered?: boolean;

  /** Whether to display the table round style */
  round?: boolean;

  /** Whether to display the table row round style */
  rowRound?: boolean;

  /**
   * Whether to display the table row border
   */
  rowBordered?: boolean;

  /** Whether to fixed header */
  headerFixed?: boolean;

  /** Whether to display row hover style */
  hoverAble?: boolean;

  /** table max height */
  maxHeight?: string | number;

  /** Whether to show table footer */
  tfoot?: boolean;

  /** Whether to fixed footer */
  footerFixed?: boolean;

  pagination?: {
    pageSize?: number;
    total?: number;
    current?: number;
  };

  onPaginationChange?: (data: {
    current: number;
    pageSize: number;
    total: number;
  }) => void;

  manualPagination?: boolean;

  rowSelection?: RowSelectionState;
  defaultRowSelection?: RowSelectionState;

  onRowSelectionChange?: (value: RowSelectionState) => void;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Row = {};

export type Column<T = any, P = any> = {
  /** unique column key */
  key: string;

  /** th content */
  title?: ColumnDefTemplate<HeaderContext<any, unknown>>;

  /** column group children */
  children?: Column<T>[];

  /** (IE not support) Set column to be fixed: true(same as left) 'left' 'right' */
  fixed?: 'left' | 'right';
} & Pick<ColumnDef<T, P>, 'cell' | 'size' | 'maxSize' | 'minSize'>;

export type TableProps = UseTableProps & {
  renderEmpty?: () => ReactNode;
};
