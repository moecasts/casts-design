import { forwardRef, useImperativeHandle } from 'react';
import { ArrowLeftSLine, ArrowRightSLine } from '@casts/icons';
import clsx from 'clsx';

import { useCarousel } from './hooks';
import { CarouselProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/carousel.scss';

export const Carousel = forwardRef((props: CarouselProps, ref) => {
  const { children, className, style } = props;
  const {
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
  } = useCarousel(props);

  useImperativeHandle(ref, () => ({
    api: emblaApi,
    containerRef,
  }));

  return (
    <div
      className={clsx(prefixCls, className)}
      style={style}
      ref={containerRef}
    >
      <div className={`${prefixCls}-viewport`} ref={emblaRef}>
        <div className={`${prefixCls}-container`}>{children}</div>
      </div>
      {dots && (
        <div className={`${prefixCls}-dots`}>
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
      {navigators && (
        <>
          <button className={`${prefixCls}-prev`} onClick={handleScrollPrev}>
            <ArrowLeftSLine />
          </button>
          <button className={`${prefixCls}-next`} onClick={handleScrollNext}>
            <ArrowRightSLine />
          </button>
        </>
      )}
    </div>
  );
});

Carousel.displayName = 'Carousel';
