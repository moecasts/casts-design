import { useCallback, useEffect, useRef, useState } from 'react';
import { useConfig } from '@casts/config-provider';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';

import { UseCarouselProps } from '../types/carousel';

export const useCarousel = (props: UseCarouselProps) => {
  const {
    autoplay,
    autoplaySpeed = 3000,
    dots = true,
    navigators = true,
    fade = false,
    loop = true,
    duration = 20,
  } = props;

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('carousel');
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const plugins = [
    ...(autoplay ? [Autoplay({ delay: autoplaySpeed })] : []),
    ...(fade ? [Fade()] : []),
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      duration,
    },
    plugins,
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

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
  };
};
