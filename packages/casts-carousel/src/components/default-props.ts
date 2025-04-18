import { CarouselProps } from './types';

export const defaultCarouselProps = {
  autoplaySpeed: 3000,
  dots: true,
  navigators: true,
  fade: false,
  loop: true,
  duration: 20,
  draggable: true,
  axis: 'x',
  stopOnInteraction: false,
  stopOnMouseEnter: true,
  stopOnFocusIn: true,
  stopOnLastSnap: false,
} satisfies Partial<CarouselProps>;
