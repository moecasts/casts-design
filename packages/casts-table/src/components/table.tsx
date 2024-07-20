import { forwardRef, Ref, useImperativeHandle } from 'react';
import { Empty } from '@casts/empty';
import { Pagination } from '@casts/pagination';
import { CircularProgress } from '@casts/progress';
import { flexRender } from '@tanstack/react-table';

import { useTable } from './hooks';
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

  useImperativeHandle(ref, () => ({}));

  return (
    <div className={classes} style={styles}>
      {loading && (
        <div className={loadingClasses}>
          <CircularProgress track />
        </div>
      )}
      <div className={contentClasses} style={contentStyles}>
        <table>
          <thead className={theadClasses}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={thClasses}>
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
                    <td key={cell.id}>
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
