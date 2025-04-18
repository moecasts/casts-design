import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

export type UseCarouselProps = BaseComponentProps & {
  /** Carousel items */
  children?: ReactNode;
  /** Whether to enable autoplay */
  autoplay?: boolean;
  /**
   * Autoplay speed in milliseconds
   * @default 3000
   */
  autoplaySpeed?: number;
  /**
   * Whether to enable loop
   * @default true
   */
  loop?: boolean;
  /**
   * Whether to show dots
   * @default true
   */
  dots?: boolean;
  /**
   * Whether to show navigators
   * @default true
   */
  navigators?: boolean;
  /**
   * Whether to enable fade effect
   * @default false
   */
  fade?: boolean;
  /**
   * Whether to enable drag interaction
   * @default true
   */
  draggable?: boolean;
  /**
   * Carousel scroll axis
   * @default 'x'
   */
  axis?: 'x' | 'y';
  /** Custom render function for navigators */
  renderNavigators?: (props: {
    prev: () => void;
    next: () => void;
    activeIndex: number;
    total: number;
    canScrollPrev: boolean;
    canScrollNext: boolean;
    axis?: 'x' | 'y';
  }) => ReactNode;
  /** Custom render function for dots */
  renderDots?: (props: {
    activeIndex: number;
    total: number;
    onDotClick: (index: number) => void;
  }) => ReactNode;
  /** Callback when active index changes */
  onChange?: (index: number) => void;
  /**
   * Carousel animation duration.
   * Duration is not in milliseconds because that uses an attraction physics simulation when scrolling instead of easings
   * @default 20
   */
  duration?: number;
  /**
   * Whether to stop autoplay on user interaction
   * @default false
   */
  stopOnInteraction?: boolean;
  /**
   * Whether to stop autoplay when mouse enters the carousel
   * @default true
   */
  stopOnMouseEnter?: boolean;
  /**
   * Whether to stop autoplay when focusable elements inside the carousel receive focus
   * @default true
   */
  stopOnFocusIn?: boolean;
  /**
   * Whether to stop autoplay when it reaches the last slide
   * @default false
   */
  stopOnLastSnap?: boolean;
};

export type CarouselProps = UseCarouselProps;
