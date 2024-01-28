import { CSSProperties, useMemo } from 'react';
import { identity, pickBy } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';

import { Column, UseTableProps } from '../types';

const columnHelper = createColumnHelper<any>();

const getColumns = (columns: Column[]): ColumnDef<any, unknown>[] =>
  columns.map((column) => {
    const children = column.children ? getColumns(column.children) : undefined;
    const { key } = column;

    const opts = pickBy(
      {
        header: column.title,
        cell: column.cell,
      },
      identity,
    );

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

export const useTable = (props: UseTableProps) => {
  const {
    className,
    style,
    bordered = false,
    stripe = false,
    cellBordered = false,
    round = true,
    rowRound = true,
    headerFixed = true,
    data = [],
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
  });
  const styles: CSSProperties = { ...style };
  const contentClasses = `${prefixCls}-content`;

  const theadClasses = `${prefixCls}-thead`;
  const thClasses = `${prefixCls}-th`;
  const tbodyClasses = `${prefixCls}-body`;
  const tfootClasses = `${prefixCls}-foot`;

  const columns = useMemo(
    () => getColumns(props.columns || []),
    [props.columns],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return {
    classes,
    styles,
    contentClasses,

    theadClasses,
    thClasses,
    tbodyClasses,
    tfootClasses,

    table,
  };
};
