import { FC, useState } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import './styles/input.scss';

export type InputShape = 'circle' | 'square' | 'round';

export type InputStatus = 'error' | 'warning' | 'success';

export type InputProps = {
  className?: string;
  shape?: InputShape;
  status?: InputStatus;
} & any;

export const Input: FC<InputProps> = (props) => {
  const {
    prefix,
    size,
    className,
    placeholder,
    tips,
    shape = 'round',
    suffix,
    status,
  } = props;
  const [focused, setFocused] = useState(false);
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('input');
  const classes = clsx(className, prefixCls, {
    [`${prefixCls}--focused`]: focused,
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${shape}`]: shape,
  });

  const wrapperClasses = clsx(`${prefixCls}-wrapper`, {
    [`${prefixCls}-wrapper--${size}`]: size,
    [`${prefixCls}-wrapper--${status}`]: status,
  });

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <div className={wrapperClasses}>
      <div className={classes}>
        {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
        <input
          className={`${prefixCls}-inner`}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {suffix && <span className={`${prefixCls}-suffix`}>{suffix}</span>}
      </div>
      {tips && <div className={`${prefixCls}-tips`}>{tips}</div>}
    </div>
  );
};
