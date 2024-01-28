import { forwardRef, Ref, useImperativeHandle } from 'react';
import { flexRender } from '@tanstack/react-table';

import { useTable } from './hooks';
import { TableProps } from './types';

import './styles/table.scss';

export const Table = forwardRef((props: TableProps, ref: Ref<any>) => {
  const {
    classes,
    styles,
    contentClasses,

    theadClasses,
    thClasses,
    tbodyClasses,
    // tfootClasses,

    table,
  } = useTable(props);

  useImperativeHandle(ref, () => ({}));

  return (
    <div className={classes} style={styles}>
      <div className={contentClasses}>
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
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {/**
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
          */}
        </table>
      </div>
    </div>
  );
});

Table.displayName = 'Table';
