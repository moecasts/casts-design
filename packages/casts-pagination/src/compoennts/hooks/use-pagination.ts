import { CSSProperties, useCallback, useMemo } from 'react';
import { noop, rangeInclusive, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { defaultPaginationProps } from '../default-props';
import {
  PaginationItemType,
  PaginationItemValue,
  UsePaginationProps,
} from '../types/pagination';

export const usePagination = (props: UsePaginationProps) => {
  const {
    className,
    style,
    size = 'medium',
    total,
    pageSize = defaultPaginationProps.pageSize!,
    // dotsJump = defaultPaginationProps.dotsJump!,
    siblings = defaultPaginationProps.siblings!,
    boundaries = defaultPaginationProps.boundaries!,
    controls = defaultPaginationProps.controls!,
  } = props;

  const { getPrefixCls } = useConfig();

  /* --------------------------------- states ---------------------------------------- */
  const [current, setCurrent] = useControlled(props, 'current', noop);

  const pageCount = Math.ceil(total / pageSize);

  const formatRange = useCallback(
    (paginationRange: PaginationItemValue[]) => {
      if (controls) {
        return [
          PaginationItemType.Prev,
          ...paginationRange,
          PaginationItemType.Next,
        ];
      }

      return paginationRange;
    },
    [controls],
  );

  const prevDisabled = useMemo(() => {
    const prev = current - 1;

    return prev < 1;
  }, [current]);

  const nextDisabled = useMemo(() => {
    const next = current + 1;

    return next > pageCount;
  }, [current, pageCount]);

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;

    if (totalPageNumbers >= pageCount) {
      return formatRange(rangeInclusive(1, pageCount));
    }

    const leftSiblingIndex = Math.max(current - siblings, boundaries);
    const rightSiblingIndex = Math.min(
      current + siblings,
      pageCount - boundaries,
    );

    /*
     * We do not want to show dots if there is only one position left
     * after/before the left/right page count as that would lead to a change if our Pagination
     * component size which we do not want
     */
    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots =
      rightSiblingIndex < pageCount - (boundaries + 1);

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;

      return formatRange([
        ...rangeInclusive(1, leftItemCount),
        PaginationItemType.Dots,
        ...rangeInclusive(pageCount - (boundaries - 1), pageCount),
      ]);
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return formatRange([
        ...rangeInclusive(1, boundaries),
        PaginationItemType.Dots,
        ...rangeInclusive(pageCount - rightItemCount, pageCount),
      ]);
    }

    return formatRange([
      ...rangeInclusive(1, boundaries),
      PaginationItemType.Dots,
      ...rangeInclusive(leftSiblingIndex, rightSiblingIndex),
      PaginationItemType.Dots,
      ...rangeInclusive(pageCount - boundaries + 1, pageCount),
    ]);
  }, [siblings, boundaries, pageCount, current, formatRange]);

  /* --------------------------------- classes and styles ---------------------------------------- */
  const prefixCls = getPrefixCls('pagination');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${size}`]: size,
  });

  const styles: CSSProperties = { ...style };

  const prevClasses = clsx(`${prefixCls}-prev`, `${prefixCls}-btn`);

  const nextClasses = clsx(`${prefixCls}-next`, `${prefixCls}-btn`);

  const pagerClasses = clsx(`${prefixCls}-pager`);

  /* --------------------------------- events ---------------------------------------- */
  const handleCurrentChange = (current: number) => {
    setCurrent(current);
  };

  const handlePrevClick = () => {
    const prev = current - 1;

    if (prev < 1) {
      return;
    }

    setCurrent(prev);
  };

  const handleNextClick = () => {
    const next = current + 1;

    if (next > pageCount) {
      return;
    }
    setCurrent(next);
  };

  return {
    classes,
    styles,

    prevClasses,
    pagerClasses,
    nextClasses,

    pageCount,

    prevDisabled,
    nextDisabled,

    current,
    handleCurrentChange,

    handlePrevClick,
    handleNextClick,

    range: paginationRange,
  };
};
