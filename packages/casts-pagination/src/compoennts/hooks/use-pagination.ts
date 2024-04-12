import { CSSProperties, useCallback, useMemo } from 'react';
import {
  isNumber,
  isUndefined,
  noop,
  omitBy,
  rangeInclusive,
  useControlled,
} from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { defaultPaginationProps } from '../default-props';
import {
  PaginationItemType,
  PaginationItemValue,
  UsePaginationProps,
} from '../types/pagination';
import { usePageSize } from './use-page-size';

export const usePagination = (props: UsePaginationProps) => {
  const {
    className,
    style,
    size = 'medium',
    total,
    dotsJump = defaultPaginationProps.dotsJump,
    siblings = defaultPaginationProps.siblings,
    boundaries = defaultPaginationProps.boundaries,
    controls = defaultPaginationProps.controls,
    onCurrentChange = noop,

    onChange = noop,
  } = props;

  const {
    pageSizeOptions,
    classes: pageSizeSelectClasses,
    pageSize,
    handlePageSizeChange: internalHandlePageSizeChange,
  } = usePageSize(
    omitBy(
      {
        pageSizes: props.pageSizes,
        pageSize: props.pageSize,
        defaultPageSize: props.defaultPageSize,
        onChange: props.onPageSizeChange,
      },
      isUndefined,
    ),
  );

  const { getPrefixCls } = useConfig();

  const onCurrentChangeWithCallback = (current: number) => {
    onCurrentChange(current);

    onChange({
      current,
      pageSize,
      total,
    });
  };

  const handlePageSizeChange: typeof internalHandlePageSizeChange = (
    pageSize,
  ) => {
    internalHandlePageSizeChange(pageSize);
    onChange({
      current,
      pageSize,
      total,
    });
  };

  /* --------------------------------- states ---------------------------------------- */
  const [current, setCurrent] = useControlled<number>(
    props,
    'current',
    onCurrentChangeWithCallback,
    1,
  );

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

  const prevClasses = clsx(`${prefixCls}-prev`);

  const nextClasses = clsx(`${prefixCls}-next`);

  const pagerClasses = clsx(`${prefixCls}-pager`);

  const dotsClasses = `${prefixCls}-dots`;
  const dotsEllipsisClasses = `${prefixCls}-dots-ellipsis`;
  const dotsArrowClasses = `${prefixCls}-dots-arrow`;

  /* --------------------------------- events ---------------------------------------- */
  const handleCurrentChange = (value: number | undefined) => {
    let current = value;

    if (!isNumber(current)) {
      return;
    }

    if (current > pageCount) {
      current = pageCount;
    } else if (current < 1) {
      current = 1;
    }

    setCurrent(current || 1);
  };

  const handlePrevClick = () => {
    const prev = Math.max(current - 1, 1);

    setCurrent(prev);
  };

  const handleNextClick = () => {
    const next = Math.min(current + 1, pageCount);
    setCurrent(next);
  };

  const handlePrevDotsClick = () => {
    const newPage = Math.max(current - dotsJump, 1);
    setCurrent(newPage);
  };

  const handleNextDotsClick = () => {
    const newPage = Math.min(current + dotsJump, pageCount);
    setCurrent(newPage);
  };

  /* --------------------------------- jumper ---------------------------------------- */

  /* --------------------------------- jumper classes and styles ---------------------------------------- */
  const jumperClasses = clsx(`${prefixCls}-jumper`);

  return {
    classes,
    styles,

    /** page size select */
    pageSize,
    pageSizeSelectClasses,
    pageSizeOptions,
    handlePageSizeChange,

    /** jumper */
    jumperClasses,

    /** pagination item */
    prevClasses,
    pagerClasses,
    nextClasses,

    dotsClasses,
    dotsEllipsisClasses,
    dotsArrowClasses,

    pageCount,

    prevDisabled,
    nextDisabled,

    current,
    handleCurrentChange,

    handlePrevClick,
    handleNextClick,
    handlePrevDotsClick,
    handleNextDotsClick,

    range: paginationRange,
  };
};
