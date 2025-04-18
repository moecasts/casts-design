import { forwardRef, useImperativeHandle } from 'react';
import { useDefaultProps } from '@casts/common';
import {
  ArrowDownSLine,
  ArrowLeftSLine,
  ArrowRightSLine,
  ArrowUpSLine,
} from '@casts/icons';
import clsx from 'clsx';

import { defaultCarouselProps } from './default-props';
import { useCarousel } from './hooks';
import { CarouselProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/carousel.scss';

export const Carousel = forwardRef((props: CarouselProps, ref) => {
  const propsWithDefault = useDefaultProps(props, defaultCarouselProps);

  const { children } = propsWithDefault;
  const {
    classes,
    styles,
    emblaRef,
    emblaApi,
    dots,
    navigators,
    prefixCls,
    containerRef,
    selectedIndex,
    scrollSnaps,
    scrollTo,
    handleScrollPrev,
    handleScrollNext,
    renderNavigators,
    renderDots,
    axis,
  } = useCarousel(propsWithDefault);

  useImperativeHandle(ref, () => ({
    api: emblaApi,
    containerRef,
  }));

  const PrevIcon = axis === 'x' ? ArrowLeftSLine : ArrowUpSLine;
  const NextIcon = axis === 'x' ? ArrowRightSLine : ArrowDownSLine;

  return (
    <div className={classes} style={styles} ref={containerRef}>
      <div className={`${prefixCls}-viewport`} ref={emblaRef}>
        <div className={`${prefixCls}-container`}>{children}</div>
      </div>
      {dots && (
        <>
          {renderDots ? (
            renderDots({
              activeIndex: selectedIndex,
              total: scrollSnaps.length,
              onDotClick: scrollTo,
            })
          ) : (
            <div
              className={clsx(`${prefixCls}-dots`, {
                [`${prefixCls}-dots-vertical`]: axis === 'y',
              })}
            >
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={clsx(`${prefixCls}-dot`, {
                    [`${prefixCls}-dot-active`]: index === selectedIndex,
                  })}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          )}
        </>
      )}
      {navigators && (
        <>
          {renderNavigators ? (
            renderNavigators({
              prev: handleScrollPrev,
              next: handleScrollNext,
              activeIndex: selectedIndex,
              total: scrollSnaps.length,
              canScrollPrev: emblaApi?.canScrollPrev() ?? false,
              canScrollNext: emblaApi?.canScrollNext() ?? false,
              axis,
            })
          ) : (
            <>
              {emblaApi?.canScrollPrev() && (
                <button
                  className={clsx(`${prefixCls}-prev`, {
                    [`${prefixCls}-prev-vertical`]: axis === 'y',
                  })}
                  onClick={handleScrollPrev}
                >
                  <PrevIcon />
                </button>
              )}
              {emblaApi?.canScrollNext() && (
                <button
                  className={clsx(`${prefixCls}-next`, {
                    [`${prefixCls}-next-vertical`]: axis === 'y',
                  })}
                  onClick={handleScrollNext}
                >
                  <NextIcon />
                </button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
});

Carousel.displayName = 'Carousel';
