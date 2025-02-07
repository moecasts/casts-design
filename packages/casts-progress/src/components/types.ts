import { BaseComponentProps } from '@casts/common';

import { FormatFunction } from '../utils';

type StrokeLinecap = 'round' | 'square';

export enum ProgressStatus {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
}

export enum ProgressSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type CircularProgressProps = BaseComponentProps & {
  /**
   * progress size
   * @default 40
   */
  size?: number;
  /**
   * progress stroke width
   * @default 3.6
   */
  strokeWidth?: number;
  /**
   * shape of progress bar
   * @default round
   */
  strokeLinecap?: StrokeLinecap;
  /**
   * color of progress bar
   * @default currentColor
   */
  color?: string;
  /**
   * show progress bar track
   * @default false
   */
  track?: boolean;
  /**
   * progress percent
   */
  percent?: number;
  /**
   * show label at the center of progress
   * @default false
   */
  showLabel?: boolean;
  /**
   * custom format label function
   * @default (percent) => `${percent}%`
   */
  format?: FormatFunction;
};

export type LinearProgressProps = BaseComponentProps & {
  /**
   * progress percent
   */
  percent?: number;
  /**
   * color of progress bar
   */
  color?: string;
  /**
   * color of progress track
   */
  trackColor?: string;
  /**
   * custom format label function
   * @default (percent) => `${percent}%`
   */
  format?: FormatFunction;
  /**
   * progress bar status
   */
  status?: `${ProgressStatus}`;
  /**
   * hideStatusIcon
   * @default false
   */
  hideStatusIcon?: boolean;
  /**
   * progress size
   * @default medium
   */
  size?: `${ProgressSize}`;
  /**
   * bar height
   */
  strokeWidth?: string;
};
