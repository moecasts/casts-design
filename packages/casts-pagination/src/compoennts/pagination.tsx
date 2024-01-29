import '@fontsource/roboto-mono';
import { forwardRef } from 'react';
import { identity, isNumber, useDefaultProps } from '@casts/common';
import { ArrowLeftSLine, ArrowRightSLine } from '@casts/icons';
import clsx from 'clsx';

import { defaultPaginationProps } from './default-props';
import { usePagination } from './hooks';
import { PaginationItem } from './pagination-item';
import { PaginationItemType, PaginationProps } from './types';

import './styles/pagination.scss';

export const Pagination = forwardRef((props: PaginationProps, ref) => {
  const propsWithDefault = useDefaultProps(props, defaultPaginationProps);

  const {
    classes,
    styles,
    prevClasses,
    nextClasses,
    pagerClasses,

    pageCount,

    current,
    handleCurrentChange,

    handlePrevClick,
    handleNextClick,

    prevDisabled,
    nextDisabled,

    range,
  } = usePagination(propsWithDefault);

  console.log('debug1', range);

  const items = (() => {
    return range
      .map((page, index) => {
        const isBefore = index < range.indexOf(current);

        if (isNumber(page)) {
          return (
            <PaginationItem
              key={page}
              page={page}
              current={current}
              onChange={handleCurrentChange}
            />
          );
        }

        if (page === PaginationItemType.Prev) {
          return (
            <button
              key={page}
              className={clsx(prevClasses, {
                disabled: prevDisabled,
              })}
              onClick={handlePrevClick}
              disabled={prevDisabled}
            >
              <ArrowLeftSLine />
            </button>
          );
        }

        if (page === PaginationItemType.Next) {
          return (
            <button
              key={page}
              className={nextClasses}
              onClick={handleNextClick}
              disabled={nextDisabled}
            >
              <ArrowRightSLine />
            </button>
          );
        }

        if (page === PaginationItemType.Dots) {
          const dotsPage = isBefore
            ? current - propsWithDefault.dotsJump!
            : current + propsWithDefault.dotsJump!;

          return (
            <button
              key={dotsPage}
              className={nextClasses}
              onClick={handleNextClick}
              disabled={nextDisabled}
            >
              ...
            </button>
          );
        }

        return undefined;
      })
      .filter(identity);
  })();

  return (
    <div className={classes} style={styles}>
      {/* <button */}
      {/*   className={clsx(prevClasses, { */}
      {/*     disabled: prevDisabled, */}
      {/*   })} */}
      {/*   onClick={handlePrevClick} */}
      {/*   disabled={prevDisabled} */}
      {/* > */}
      {/*   <ArrowLeftSLine /> */}
      {/* </button> */}
      <ul className={pagerClasses}>{items}</ul>
      {/* <button */}
      {/*   className={nextClasses} */}
      {/*   onClick={handleNextClick} */}
      {/*   disabled={nextDisabled} */}
      {/* > */}
      {/*   <ArrowRightSLine /> */}
      {/* </button> */}
    </div>
  );
});

Pagination.displayName = 'Pagination';
