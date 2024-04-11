import { CSSProperties, FC } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { defaultFormat } from '../utils';
import { CircularProgressProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/circular.scss';

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
    className,
    style,
  } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('circular-progress');
  const containerClasses = clsx(`${prefixCls}-container`, className);
  const svgClasses = clsx(prefixCls, {
    [`${prefixCls}--indeterminate`]: percent === undefined,
  });
  const circleClasses = `${prefixCls}-circle`;
  const circleTrackClasses = `${prefixCls}-circle-track`;
  const textClass = `${prefixCls}-text`;

  const viewBox = `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`;
  const radius = (SIZE - strokeWidth) / 2;

  let circleStyles = {};
  let rotateOffset = undefined;
  if (percent !== undefined) {
    const circumference = radius * Math.PI * 2;
    const strokeDasharray = circumference.toFixed(3);
    const strokeDashoffset = `${(
      ((100 - percent) / 100) *
      circumference
    ).toFixed(3)}px`;
    rotateOffset = 'rotate(-90deg)';

    circleStyles = {
      strokeDasharray,
      strokeDashoffset,
    };
  }

  const styles: CSSProperties = { ...style };

  return (
    <span
      className={containerClasses}
      style={{
        color,
        fontSize: `${size}px`,
        ...styles,
      }}
    >
      <svg
        className={svgClasses}
        viewBox={viewBox}
        style={{ transform: rotateOffset }}
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
