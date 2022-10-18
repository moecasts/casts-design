import { FC, useContext } from 'react';
import { ConfigContext } from '@casts/config-provider';
import clsx from 'clsx';
import { defaultFormat } from '../utils';
import { CircularProgressProps } from './types';
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
