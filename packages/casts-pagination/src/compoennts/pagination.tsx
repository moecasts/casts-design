import '@fontsource/roboto-mono';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { isNumber, useDefaultProps } from '@casts/common';
import {
  ArrowLeftDoubleLine,
  ArrowLeftSLine,
  ArrowRightDoubleLine,
  ArrowRightSLine,
  MoreLine,
} from '@casts/icons';
import { Select } from '@casts/select';

import { defaultPaginationProps } from './default-props';
import { usePagination } from './hooks';
import { PaginationItem } from './pagination-item';
import { PaginationJumper } from './pagination-jumper';
import { PaginationItemType, PaginationProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/pagination.scss';

export const Pagination = forwardRef((props: PaginationProps, ref) => {
  const propsWithDefault = useDefaultProps(props, defaultPaginationProps);

  const {
    classes,
    styles,
    prevClasses,
    nextClasses,
    pagerClasses,

    dotsClasses,
    dotsEllipsisClasses,
    dotsArrowClasses,

    current,
    handleCurrentChange,

    handlePrevClick,
    handleNextClick,

    handlePrevDotsClick,
    handleNextDotsClick,

    prevDisabled,
    nextDisabled,

    range,

    pageCount,

    pageSize,
    pageSizeSelectClasses,
    pageSizeOptions,
    handlePageSizeChange,
  } = usePagination(propsWithDefault);

  const renderItems = () => {
    return range.map((page, index) => {
      const isBefore = index < range.indexOf(current);

      /**
       * NOTE: The reason for using index as the key is to avoid
       * the transition animation that occurs
       * when flipping to a page number in the same position.
       */
      const getKey = () => {
        if (page === PaginationItemType.Dots) {
          return `${index}-${isBefore}`;
        }

        return index;
      };

      const key = getKey();

      if (isNumber(page)) {
        return (
          <PaginationItem
            key={key}
            page={page}
            current={current}
            onChange={(value) => handleCurrentChange(value as number)}
          />
        );
      }

      if (page === PaginationItemType.Prev) {
        return (
          <PaginationItem
            key={key}
            page={page}
            render={() => <ArrowLeftSLine />}
            className={prevClasses}
            disabled={prevDisabled}
            onChange={handlePrevClick}
          />
        );
      }

      if (page === PaginationItemType.Next) {
        return (
          <PaginationItem
            key={key}
            page={page}
            render={() => <ArrowRightSLine />}
            className={nextClasses}
            disabled={nextDisabled}
            onChange={handleNextClick}
          />
        );
      }

      if (page === PaginationItemType.Dots) {
        return (
          <PaginationItem
            key={key}
            page={page}
            className={dotsClasses}
            onChange={isBefore ? handlePrevDotsClick : handleNextDotsClick}
            render={() => {
              return (
                <>
                  <MoreLine className={dotsEllipsisClasses} />
                  {isBefore ? (
                    <ArrowLeftDoubleLine className={dotsArrowClasses} />
                  ) : (
                    <ArrowRightDoubleLine className={dotsArrowClasses} />
                  )}
                </>
              );
            }}
          />
        );
      }

      return undefined;
    });
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  return (
    <div className={classes} style={styles} ref={containerRef}>
      <Select
        className={pageSizeSelectClasses}
        options={pageSizeOptions}
        value={pageSize}
        onChange={handlePageSizeChange}
        size={props.size}
      />

      <ul className={pagerClasses}>{renderItems()}</ul>

      <PaginationJumper
        current={current}
        pageCount={pageCount}
        onCurrentConfirmChange={handleCurrentChange}
      />
    </div>
  );
});

Pagination.displayName = 'Pagination';
