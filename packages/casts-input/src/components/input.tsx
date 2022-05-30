import clsx from 'clsx';
import { ChangeEventHandler } from '../types';
import { useConfig } from '@casts/config-provider';
import { useControlled } from '@casts/hooks';
import './styles/input.scss';

import {
  CSSProperties,
  ChangeEvent,
  CompositionEvent,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
  FocusEventHandler,
} from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export type InputShape = 'circle' | 'square' | 'round';

export type InputStatus = 'error' | 'warning' | 'success';

export type InputProps = {
  autoWidth?: boolean;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler;
  onCompositionEnd?: ChangeEventHandler;
  onCompositionStart?: ChangeEventHandler;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  prefix?: string;
  shape?: InputShape;
  size?: InputSize;
  status?: InputStatus;
  style?: CSSProperties;
  suffix?: ReactNode;
  tips?: ReactNode;
};

export const defaultProps: InputProps = {
  shape: 'round',
};

export const Input: FC<InputProps> = (props) => {
  const {
    autoWidth,
    className,
    disabled,
    maxLength,
    onBlur,
    onChange: onChangeFromProps,
    onCompositionEnd,
    onCompositionStart,
    onFocus,
    placeholder,
    prefix,
    shape = 'round',
    size,
    status,
    style,
    suffix,
    tips,
  } = props;
  const [value, onChange] = useControlled(props, 'value', onChangeFromProps);
  const valueLength = value?.length || 0;
  const [focused, setFocused] = useState(false);
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('input');
  const classes = clsx(className, prefixCls, {
    [`${prefixCls}--focused`]: focused,
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${shape}`]: shape,
  });
  const wrapStyles = style;

  const wrapClasses = clsx(`${prefixCls}-wrap`, {
    [`${prefixCls}-wrap--${size}`]: size,
    [`${prefixCls}-wrap--${status}`]: status,
    [`${prefixCls}-wrap--disabled`]: disabled,
    [`${prefixCls}-wrap--auto-width`]: autoWidth,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const inputPreRef = useRef<HTMLSpanElement>(null);
  const composingRef = useRef<boolean>(false);
  const [composingRefValue, setComposingRefValue] = useState('');

  useEffect(() => {
    if (!autoWidth || !inputRef.current || !inputPreRef.current) return;
    inputRef.current.style.width = `${inputPreRef.current.offsetWidth}px`;
  }, [composingRefValue, autoWidth, value, placeholder]);

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    !focused && setFocused(true);
    onFocus?.(e);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    focused && setFocused(false);
    onBlur?.(e);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | CompositionEvent<HTMLInputElement>,
  ) => {
    let {
      currentTarget: { value },
    } = e;
    if (composingRef.current) {
      setComposingRefValue(value);
      return;
    }
    if (maxLength) {
      value = value.substring(0, maxLength);
    }
    onChange?.(value, { e });
  };

  const handleCompositionStart = (e: CompositionEvent<HTMLInputElement>) => {
    composingRef.current = true;
    const {
      currentTarget: { value },
    } = e;
    onCompositionStart?.(value, { e });
  };

  const handleCompositionEnd = (e: CompositionEvent<HTMLInputElement>) => {
    if (composingRef.current) {
      composingRef.current = false;
      handleChange(e);
    }
    const {
      currentTarget: { value },
    } = e;
    setComposingRefValue('');
    onCompositionEnd?.(value, { e });
  };

  return (
    <div className={wrapClasses} style={wrapStyles}>
      <div className={classes}>
        {autoWidth && (
          <span
            className={`${prefixCls}-pre`}
            ref={inputPreRef}
            dangerouslySetInnerHTML={{
              __html: (composingRefValue || value || placeholder || '').replace(
                / /g,
                '&nbsp;',
              ),
            }}
          ></span>
        )}
        {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
        <input
          className={`${prefixCls}-inner`}
          value={composingRef.current ? composingRefValue : value ?? ''}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          ref={inputRef}
        />
        {maxLength && (
          <span className={`${prefixCls}-max-length`}>
            {`${valueLength}/${maxLength}`}
          </span>
        )}
        {suffix && <span className={`${prefixCls}-suffix`}>{suffix}</span>}
      </div>
      {tips && <div className={`${prefixCls}-tips`}>{tips}</div>}
    </div>
  );
};

Input.defaultProps = defaultProps;
