import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';

import { UseCarouselProps } from '../types/carousel';

export const useCarousel = (props: UseCarouselProps) => {
  const {
    autoplay,
    autoplaySpeed,
    dots,
    navigators,
    fade,
    loop,
    duration,
    draggable,
    axis,
    onChange,
    stopOnInteraction,
    stopOnMouseEnter,
    stopOnFocusIn,
    stopOnLastSnap,
    className,
    style,
    ...rest
  } = props;

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('carousel');
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}-vertical`]: axis === 'y',
  });

  const styles: CSSProperties = {
    ...style,
  };

  const plugins = [
    ...(autoplay
      ? [
          Autoplay({
            delay: autoplaySpeed,
            stopOnInteraction,
            stopOnMouseEnter,
            stopOnFocusIn,
            stopOnLastSnap,
          }),
        ]
      : []),
    ...(fade ? [Fade()] : []),
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      duration,
      watchDrag: draggable,
      axis,
    },
    plugins,
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    const newIndex = emblaApi.selectedScrollSnap();
    if (newIndex !== selectedIndex) {
      setSelectedIndex(newIndex);
      onChange?.(newIndex);
    }
  }, [emblaApi, onChange, selectedIndex]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) {
        return;
      }
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const handleScrollPrev = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleScrollNext = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    ...rest,
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
    axis,
  };
};
