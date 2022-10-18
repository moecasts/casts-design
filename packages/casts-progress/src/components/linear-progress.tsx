import { FC, useContext } from 'react';
import { ConfigContext } from '@casts/config-provider';
import clsx from 'clsx';
import { defaultFormat } from '../utils';
import {
  CheckboxCircleFill,
  CloseCircleFill,
  InformationFill,
} from '@casts/icons';
import { LinearProgressProps, ProgressStatus } from './types';
import './styles/linear.scss';

export const LinearProgress: FC<LinearProgressProps> = (props) => {
  const {
    className,
    percent,
    format = defaultFormat,
    status,
    hideStatusIcon,
    size = 'medium',
    style,
    color,
    trackColor,
    strokeWidth,
  } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('linear-progress');

  const containerClasses = clsx(`${prefixCls}`, className, {
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${status}`]: status,
    [`${prefixCls}--indeterminate`]: percent === undefined,
  });

  const barClasses = `${prefixCls}-bar`;
  const innerClasses = `${prefixCls}-inner`;
  const labelClasses = `${prefixCls}-label`;
  const iconClasses = `${prefixCls}-icon`;
  const textClasses = `${prefixCls}-text`;

  const styles = {
    ...style,
    color,
    height: strokeWidth,
  };

  return (
    <div
      className={containerClasses}
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      style={styles}
    >
      <span className={barClasses} style={{ backgroundColor: trackColor }}>
        <span className={innerClasses} style={{ width: `${percent}%` }}></span>
      </span>
      {(status || percent !== undefined) && (
        <span className={labelClasses}>
          {!hideStatusIcon && (
            <>
              {status === ProgressStatus.SUCCESS && (
                <span className={iconClasses}>
                  <CheckboxCircleFill size="16px" />
                </span>
              )}
              {status === ProgressStatus.WARNING && (
                <span className={iconClasses}>
                  <InformationFill size="16px" />
                </span>
              )}
              {status === ProgressStatus.ERROR && (
                <span className={iconClasses}>
                  <CloseCircleFill size="16px" />
                </span>
              )}
            </>
          )}
          {!status && percent !== undefined && (
            <span className={textClasses}>{format(percent)}</span>
          )}
        </span>
      )}
    </div>
  );
};
