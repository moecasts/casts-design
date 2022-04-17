import { FC, useContext } from 'react';
import { ConfigContext } from '@casts/config-provider';
import clsx from 'clsx';
import './styles/circular.scss';
import { defaultFormat, FormatFunction } from './util';

type StrokeLinecap = 'round' | 'square';

export type CircularProgressProps = {
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

const SIZE = 44;

export const CircularProgress: FC<CircularProgressProps> = (props) => {
  const {
    size,
    color,
    strokeWidth = 3.6,
    strokeLinecap = 'round',
    track = false,
    percent,
    showLabel = false,
    format = defaultFormat,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('circular-progress');
  const containerClasses = `${prefixCls}-container`;
  const svgClasses = clsx(prefixCls, {
    [`${prefixCls}--indeterminate`]: percent === undefined,
  });
  const circleClasses = `${prefixCls}-circle`;
  const circleTrackClasses = `${prefixCls}-circle-track`;
  const textClass = `${prefixCls}-text`;

  const viewBox = `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`;
  const radius = (SIZE - strokeWidth) / 2;

  let circleStyles = {};
  let rotateOffeset = undefined;
  if (percent !== undefined) {
    const circumference = radius * Math.PI * 2;
    const strokeDasharray = circumference.toFixed(3);
    const strokeDashoffset = `${(
      ((100 - percent) / 100) *
      circumference
    ).toFixed(3)}px`;
    rotateOffeset = 'rotate(-90deg)';

    circleStyles = {
      strokeDasharray,
      strokeDashoffset,
    };
  }

  return (
    <span
      className={containerClasses}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        color,
        fontSize: `${size}px`,
      }}
    >
      <svg
        className={svgClasses}
        viewBox={viewBox}
        style={{ transform: rotateOffeset }}
      >
        {track && (
          <circle
            className={circleTrackClasses}
            fill="none"
            cx={SIZE}
            cy={SIZE}
            r={radius}
            strokeWidth={`${strokeWidth}`}
          />
        )}
        <circle
          className={circleClasses}
          fill="none"
          cx={SIZE}
          cy={SIZE}
          r={radius}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          style={circleStyles}
        />
      </svg>
      {showLabel && <span className={textClass}>{format(percent)}</span>}
    </span>
  );
};
