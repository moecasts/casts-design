import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { isUndefined, pick, some } from '@casts/common';
import { Empty } from '@casts/empty';
import { Pagination } from '@casts/pagination';
import { CircularProgress } from '@casts/progress';
import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';

import { useTable } from './hooks';
import { useTableColumnTablePinning } from './hooks/use-table-column-pinning';
import { TableProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/table.scss';

export const Table = forwardRef((props: TableProps, ref: Ref<any>) => {
  const {
    classes,
    styles,
    contentClasses,

    theadClasses,
    thClasses,
    tbodyClasses,
    tfootClasses,

    placeholderClasses,
    emptyClasses,

    getRowClasses,

    contentStyles,

    paginationClasses,
    pagination,
    handlePaginationChange,

    table,

    tfoot,

    loading,
    loadingClasses,

    getRowKey,
  } = useTable(props);

  const tableContainerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const thRefs = useRef<Record<string, HTMLTableHeaderCellElement>>({});

  const { getColumnPinningStyles, getColumnPinningClasses } =
    useTableColumnTablePinning({
      columns: props.columns,
      tableContainerRef,
      columnsRef: thRefs,
      tableRef,
    });

  useImperativeHandle(ref, () => ({}));

  return (
    <div className={classes} style={styles}>
      {loading && (
        <div className={loadingClasses}>
          <CircularProgress track />
        </div>
      )}
      <div
        className={contentClasses}
        style={contentStyles}
        ref={tableContainerRef}
      >
        <table ref={tableRef}>
          <thead className={theadClasses}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    data-id={header.column.id}
                    ref={(element) => {
                      if (element) {
                        thRefs.current[header.column.id] = element;
                      } else {
                        delete thRefs.current[header.column.id];
                      }
                    }}
                    className={clsx(
                      thClasses,
                      getColumnPinningClasses({
                        key: header.column.id,
                        fixed: (header.column.columnDef.meta as any)?.fixed,
                      }),
                    )}
                    style={{
                      ...getColumnPinningStyles({
                        key: header.column.id,
                        fixed: (header.column.columnDef.meta as any)?.fixed,
                      }),
                      width: some(
                        pick(header.column.columnDef.meta, [
                          'size',
                          'minSize',
                          'maxSize',
                        ]),
                        (item) => !isUndefined(item),
                      )
                        ? header.getSize()
                        : undefined,
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className={tbodyClasses}>
            {table.getRowModel().rows.map((row, index) => (
              <tr key={getRowKey(index)} className={getRowClasses(row)}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className={clsx(
                        getColumnPinningClasses({
                          key: cell.column.id,
                          fixed: (cell.column.columnDef.meta as any)?.fixed,
                        }),
                      )}
                      style={{
                        ...getColumnPinningStyles({
                          key: cell.column.id,
                          fixed: (cell.column.columnDef.meta as any)?.fixed,
                        }),
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}

            {table.getRowModel().rows.length === 0 && (
              <tr className={placeholderClasses}>
                <td colSpan={table.getLeafHeaders().length}>
                  <Empty className={emptyClasses} />
                </td>
              </tr>
            )}
          </tbody>
          {tfoot && (
            <tfoot className={tfootClasses}>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          )}
        </table>
      </div>
      {pagination.total > 0 && (
        <Pagination
          total={pagination.total}
          className={paginationClasses}
          current={(pagination as any).current || 1}
          pageSize={pagination.pageSize}
          onChange={handlePaginationChange}
        />
      )}
    </div>
  );
});

Table.displayName = 'Table';
