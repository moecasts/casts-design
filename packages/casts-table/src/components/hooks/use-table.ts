import { CSSProperties, useMemo, useState } from 'react';
import { formatSizeUnit, identity, pickBy } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PaginationProps } from '@casts/pagination';
import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  noop,
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
        footer: column.title,
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

  const columns = useMemo(
    () => getColumns(props.columns || []),
    [props.columns],
  );

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: data.length,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: {
        pageSize: pagination.pageSize,
        pageIndex: (pagination.current || 1) - 1,
      },
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

    ...rest,
  };
};
