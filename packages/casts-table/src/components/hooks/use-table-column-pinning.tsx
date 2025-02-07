import {
  CSSProperties,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  getStyle,
  isUndefined,
  reduce,
  useScroll,
  useSize,
} from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { Column } from '../types';

export type Rect = {
  x: number;
  offsetLeft?: number;
  offsetRight?: number;
  fixed?: 'left' | 'right';
};

type ColumnPinning = Pick<Column, 'fixed' | 'key'>;

export type UseTableColumnTablePinningProps = {
  columns: ColumnPinning[];
  tableRef: RefObject<HTMLElement>;
  tableContainerRef: RefObject<HTMLElement>;
  columnsRef: RefObject<Record<string, HTMLElement>>;
};

export const useTableColumnTablePinning = (
  props: UseTableColumnTablePinningProps,
) => {
  const { columns, tableContainerRef, columnsRef, tableRef } = props;

  const columnRectsRef = useRef<Record<string, Rect>>({});

  const [rightFirstColumnKey, setRightFirstColumnKey] = useState<string>();
  const [leftLastColumnKey, setLeftLastColumnKey] = useState<string>();

  const { left: leftFixedColumns, right: rightFixedColumns } = useMemo(
    () =>
      reduce(
        columns,
        (acc, currentColumn) => {
          if (currentColumn.fixed === 'left') {
            acc.left.push(currentColumn);
          }

          if (currentColumn.fixed === 'right') {
            acc.right.unshift(currentColumn);
          }

          return acc;
        },
        {
          left: [] as ColumnPinning[],
          right: [] as ColumnPinning[],
        },
      ),
    [columns],
  );

  const scroll = useScroll(tableContainerRef);

  const tableSize = useSize(tableRef);
  const tableContainerSize = useSize(tableContainerRef);

  const columnStickyRights = useMemo<Record<string, number>>(() => {
    const calculateColumnStickyRights = (columns: ColumnPinning[]) => {
      if (
        columns.length === 0 ||
        !columnsRef.current ||
        !tableContainerRef.current
      ) {
        return {};
      }

      const columnStickyRights: Record<string, number> = {};

      let offsetRight = 0;

      rightFixedColumns.forEach((column) => {
        const columnElement = columnsRef.current?.[column.key];

        if (!columnElement || !tableContainerRef.current) {
          return;
        }

        const currentPosition = getStyle(columnElement)?.position;

        if (currentPosition === 'sticky') {
          columnElement.style.position = 'static';
        }

        const clientRect = columnElement.getBoundingClientRect();

        const rect: Rect = {
          fixed: column.fixed,
          offsetRight,
          x: Math.floor(
            columnElement.offsetLeft -
              tableContainerRef.current.clientWidth +
              clientRect.width +
              offsetRight,
          ),
        };

        columnStickyRights[column.key] = Math.floor(offsetRight * 100) / 100;
        // Keep two decimals to prevent gaps in columns
        offsetRight += clientRect.width;

        columnRectsRef.current[column.key] = rect;

        if (currentPosition === 'sticky') {
          columnElement.style.position = currentPosition;
        }
      });

      return columnStickyRights;
    };

    return calculateColumnStickyRights(rightFixedColumns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnsRef,
    rightFixedColumns,
    tableContainerRef,
    tableContainerSize?.width,
    tableSize?.width,
  ]);

  const columnStickyLefts = useMemo<Record<string, number>>(() => {
    const calculateColumnStickyLefts = (columns: ColumnPinning[]) => {
      if (
        columns.length === 0 ||
        !columnsRef.current ||
        !tableContainerRef.current
      ) {
        return {};
      }

      const columnStickyLefts: Record<string, number> = {};

      let offsetLeft = 0;

      leftFixedColumns.forEach((column) => {
        const columnElement = columnsRef.current?.[column.key];

        if (!columnElement || !tableContainerRef.current) {
          return;
        }

        const currentPosition = getStyle(columnElement)?.position;

        if (currentPosition === 'sticky') {
          columnElement.style.position = 'static';
        }

        const clientRect = columnElement.getBoundingClientRect();

        const rect: Rect = {
          fixed: column.fixed,
          offsetLeft,
          x: Math.floor(columnElement.offsetLeft - offsetLeft),
        };

        columnStickyLefts[column.key] = offsetLeft;
        offsetLeft += clientRect.width;

        columnRectsRef.current[column.key] = rect;

        if (currentPosition === 'sticky') {
          columnElement.style.position = currentPosition;
        }
      });

      return columnStickyLefts;
    };

    return calculateColumnStickyLefts(leftFixedColumns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnsRef,
    leftFixedColumns,
    tableContainerRef,
    tableContainerSize?.width,
  ]);

  const [rightColumnKeys, setRightColumnKeys] = useState<
    Record<string, boolean>
  >({});
  const [leftColumnKeys, setLeftColumnKeys] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    const scrollLeft = scroll?.left;
    if (isUndefined(scrollLeft)) {
      return;
    }

    const calculateRightFirstColumnKey = () => {
      let rightFirstColumnKey = '';

      const rightColumnKeys = reduce(
        columnRectsRef.current,
        (acc, current, currentKey) => {
          if (
            current.fixed === 'right' &&
            !isUndefined(current.x) &&
            current.x > scrollLeft
          ) {
            rightFirstColumnKey = currentKey;
            return {
              ...acc,
              [currentKey]: true,
            };
          }

          return acc;
        },
        {} as Record<string, boolean>,
      );

      setRightColumnKeys(rightColumnKeys);
      setRightFirstColumnKey(rightFirstColumnKey);
    };

    const calculateLeftLastColumnKey = () => {
      let leftLastColumnKey = '';

      const leftColumnKeys = reduce(
        columnRectsRef.current,
        (acc, current, currentKey) => {
          if (
            current.fixed === 'left' &&
            !isUndefined(current.x) &&
            current.x < scrollLeft
          ) {
            leftLastColumnKey = currentKey;
            return {
              ...acc,
              [currentKey]: true,
            };
          }

          return acc;
        },
        {} as Record<string, boolean>,
      );

      setLeftColumnKeys(leftColumnKeys);
      setLeftLastColumnKey(leftLastColumnKey);
    };

    calculateRightFirstColumnKey();
    calculateLeftLastColumnKey();
  }, [scroll?.left, tableContainerSize?.width, tableSize?.width]);

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('table-column--pinning');

  const getColumnPinningClasses = (column: ColumnPinning) =>
    clsx({
      [`${prefixCls}-${column.fixed}`]:
        leftColumnKeys[column.key] || rightColumnKeys[column.key],
      [`${prefixCls}-left-last`]: leftLastColumnKey === column.key,

      [`${prefixCls}-right-first`]: rightFirstColumnKey === column.key,
    });

  const getColumnPinningStyles = (column: ColumnPinning) => {
    const styles: CSSProperties = {
      position: column.fixed && 'sticky',
      right: columnStickyRights[column.key],
      left: columnStickyLefts[column.key],
    };

    return styles;
  };

  return {
    getColumnPinningClasses,
    getColumnPinningStyles,
  };
};
