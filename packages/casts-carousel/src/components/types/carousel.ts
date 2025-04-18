import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

export type UseCarouselProps = {
  /** 轮播项 */
  children?: ReactNode;
  /** 是否自动播放 */
  autoplay?: boolean;
  /** 自动播放速度（毫秒） */
  autoplaySpeed?: number;
  /** 是否循环播放 */
  loop?: boolean;
  /** 是否显示指示器 */
  dots?: boolean;
  /** 是否显示箭头 */
  navigators?: boolean;
  /** 是否启用淡入淡出效果 */
  fade?: boolean;
  /**
   * 轮播动画间隔
   * @description Duration is not in milliseconds because that uses an attraction physics simulation when scrolling instead of easings
   */
  duration?: number;
};

export type CarouselProps = BaseComponentProps & UseCarouselProps;
