import { BaseComponentProps } from '@casts/common';
import {
  ColumnDef,
  ColumnDefTemplate,
  HeaderContext,
} from '@tanstack/react-table';

export type TableProps = UseTableProps;

export type UseTableProps = BaseComponentProps & {
  /** table columns */
  columns: Column[];

  /** table data */
  data: object[];

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

  /** Whether to fixed header */
  headerFixed?: boolean;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Row = {};

export type Column = {
  /** unique column key */
  key: string;

  /** th content */
  title: ColumnDefTemplate<HeaderContext<any, unknown>>;

  /** column group children */
  children?: Column[];

  /** (IE not support) Set column to be fixed: true(same as left) 'left' 'right' */
  fixed?: boolean;

  cell?: ColumnDef<any, any>['cell'];
};
