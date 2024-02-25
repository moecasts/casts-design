import {
  createElement,
  CSSProperties,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Checkbox } from '@casts/checkbox';
import { formatSizeUnit, identity, pickBy, upperFirst } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PaginationProps } from '@casts/pagination';
import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  IdentifiedColumnDef,
  isFunction,
  noop,
  OnChangeFn,
  Row,
  RowSelectionState,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';

import { Column, UseTableProps } from '../types';

const columnHelper = createColumnHelper<any>();

const getColumns = (columns: Column[]): ColumnDef<any, unknown>[] => {
  const cols = columns.map((column) => {
    const children = column.children ? getColumns(column.children) : undefined;
    const { key } = column;

    const opts = pickBy(
      {
        header: column.title,
        cell: column.cell,
        footer: column.title,
      },
      identity,
    );

    if (key === 'row-select') {
      Object.assign(opts, {
        header: ({ table }) =>
          createElement(Checkbox, {
            checked:
              table.getIsAllRowsSelected() || table.getIsSomeRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: (value) => {
              const checked = table.getIsSomeRowsSelected() ? true : value;
              table.toggleAllRowsSelected(checked as boolean);
            },
          }),
        cell: ({ row }) =>
          createElement(Checkbox, {
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: (value) => {
              row.toggleSelected(value as boolean);
            },
          }),
      } as Partial<IdentifiedColumnDef<any, any>>);
    }

    if (children) {
      return columnHelper.group({
        id: column.key,
        columns: children,
        ...opts,
      });
    }

    return columnHelper.accessor(key, {
      ...opts,
    });
  });

  return cols;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ChangeHandler<T, P extends any[]> {
  (value: T, ...args: P): void;
}

export const useControlledWithUpdater = <T, P extends any[] = any[]>(
  props: Record<PropertyKey, any> = {},
  valueKey: string,
  onChange: ChangeHandler<T, P>,
  /**
   * use fallbackDefaultValue when defaultValue is not exist
   */
  fallbackDefaultValue?: T,
): [T, ChangeHandler<T, P>] => {
  const value = props[valueKey];

  // The uncontrolled key for a controlled attribute is defaultXxx.
  const defaultValue =
    props[`default${upperFirst(valueKey)}`] ?? fallbackDefaultValue;

  const [internalValue, setInternalValue] = useState(defaultValue);

  // is controlled mode when valueKey is exist in props
  const controlled = Reflect.has(props, valueKey);

  const getNextValue = (updaterOrValue, prevValue) => {
    const nextValue = isFunction(updaterOrValue)
      ? updaterOrValue(prevValue)
      : updaterOrValue;

    return nextValue;
  };

  const setValue = (updaterOrValue) => {
    if (controlled) {
      const nextValue = getNextValue(updaterOrValue, value);
      onChange?.(nextValue);
      return;
    }

    setInternalValue((prevValue) => {
      const nextValue = getNextValue(updaterOrValue, prevValue);

      onChange?.(nextValue);
      return nextValue;
    });
  };

  if (controlled) {
    return [value, setValue];
  }

  return [internalValue, setValue];
};

export const useTable = (props: UseTableProps) => {
  const {
    className,
    style,
    bordered,
    stripe,
    cellBordered,
    round = true,
    rowRound,
    headerFixed = true,
    hoverAble,
    rowBordered,
    data = [],
    maxHeight,

    footerFixed,

    manualPagination,

    onPaginationChange = noop,

    loading,

    onRowSelectionChange = noop,

    ...rest
  } = props;

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('table');
  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--bordered`]: bordered,
    [`${prefixCls}--stripe`]: stripe,
    [`${prefixCls}--cell-bordered`]: cellBordered,
    [`${prefixCls}--round`]: round,
    [`${prefixCls}--row-round`]: rowRound,
    [`${prefixCls}--header-fixed`]: headerFixed,
    [`${prefixCls}--footer-fixed`]: footerFixed,
    [`${prefixCls}--row-bordered`]: rowBordered,
    [`${prefixCls}--hover-able`]: hoverAble,
    [`${prefixCls}--loading`]: loading,
  });
  const styles: CSSProperties = { ...style };
  const contentClasses = `${prefixCls}-content`;

  const theadClasses = `${prefixCls}-thead`;
  const thClasses = `${prefixCls}-th`;
  const tbodyClasses = `${prefixCls}-body`;
  const tfootClasses = `${prefixCls}-foot`;

  const paginationClasses = `${prefixCls}-pagination`;

  const loadingClasses = `${prefixCls}-loading`;

  const getRowClasses = (row: Row<unknown>) =>
    clsx(`${prefixCls}-row`, {
      [`${prefixCls}-row--selected`]: row.getIsSelected(),
    });

  const columns = useMemo(
    () => getColumns(props.columns || []),
    [props.columns],
  );

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: data.length,
  });

  // const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [rowSelection, setRowSelection] =
    useControlledWithUpdater<RowSelectionState>(
      props,
      'rowSelection',
      onRowSelectionChange,
      {},
    );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination,
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection as OnChangeFn<RowSelectionState>,
    state: {
      pagination: {
        pageSize: pagination.pageSize,
        pageIndex: (pagination.current || 1) - 1,
      },
      rowSelection: rowSelection,
    },
  });

  const handlePaginationChange: PaginationProps['onChange'] = (data) => {
    const newPagination = { ...data };
    // if change page size, reset to first page
    if (data.pageSize !== pagination.pageSize) {
      newPagination.current = 1;
    }

    setPagination(newPagination);

    onPaginationChange(newPagination);
  };

  const contentStyles: CSSProperties = {
    maxHeight: maxHeight && formatSizeUnit(maxHeight),
  };

  const getRowKey = useCallback(
    (index: number) => table.getRowModel().rows[index]?.id ?? index,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [table.getRowModel().rows],
  );

  return {
    classes,
    styles,
    contentClasses,

    theadClasses,
    thClasses,
    tbodyClasses,
    tfootClasses,

    contentStyles,

    paginationClasses,

    table,

    pagination,
    handlePaginationChange,

    loading,
    loadingClasses,

    getRowClasses,

    getRowKey,

    ...rest,
  };
};
