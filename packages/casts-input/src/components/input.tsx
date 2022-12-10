import { defaultProps } from './default-props';
import { InputProps } from './types';
import { noop } from '@casts/hooks';
import { useConfig } from '@casts/config-provider';
import './styles/input.scss';

import { ForwardedRef, forwardRef, useImperativeHandle } from 'react';
import { useInput } from './hooks';
import { CloseLine } from '@casts/icons';

type InputRef = HTMLInputElement | null;

export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<InputRef>) => {
    const {
      autoWidth,
      className,
      disabled,
      maxLength,
      onBlur,
      onChange = noop,
      onCompositionEnd,
      onCompositionStart,
      onFocus,
      placeholder,
      prefix,
      shape,
      size,
      status,
      style,
      suffix,
      tips,
      clearable,
      ...rest
    } = props;
    const { getPrefixCls } = useConfig();

    const {
      classes,
      composingRef,
      composingRefValue,
      handleBlur,
      handleChange,
      handleCompositionEnd,
      handleCompositionStart,
      handleFocus,
      inputPreRef,
      inputRef,
      prefixCls,
      value,
      valueLength,
      wrapClasses,
      wrapStyles,
      clearValue,
    } = useInput({
      clearable,
      placeholder,
      autoWidth,
      className,
      disabled,
      getPrefixCls,
      maxLength,
      onBlur,
      onChange,
      onCompositionEnd,
      onCompositionStart,
      onFocus,
      shape,
      size,
      status,
      style,
    });

    useImperativeHandle<InputRef, InputRef>(ref, () => inputRef.current, [
      inputRef,
    ]);

    const focusInput = () => inputRef.current?.focus();

    return (
      <div className={wrapClasses} style={wrapStyles}>
        <div
          role="presentation"
          className={classes}
          onClick={focusInput}
          onKeyDown={focusInput}
        >
          {autoWidth && (
            <span
              className={`${prefixCls}-pre`}
              ref={inputPreRef}
              dangerouslySetInnerHTML={{
                __html: (
                  composingRefValue ||
                  (value && String(value)) ||
                  placeholder ||
                  ''
                ).replace(/ /g, '&nbsp;'),
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
            {...rest}
          />
          {maxLength && (
            <span className={`${prefixCls}-max-length`}>
              {`${valueLength}/${maxLength}`}
            </span>
          )}
          {clearable && value && (
            <button
              className={`${prefixCls}-clear`}
              onClick={(e) => clearValue(e)}
            >
              <CloseLine />
            </button>
          )}
          {suffix && <span className={`${prefixCls}-suffix`}>{suffix}</span>}
        </div>
        {tips && <div className={`${prefixCls}-tips`}>{tips}</div>}
      </div>
    );
  },
);

Input.displayName = 'Input';

Input.defaultProps = defaultProps;
