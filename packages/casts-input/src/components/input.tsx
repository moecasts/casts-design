import {
  ForwardedRef,
  forwardRef,
  MouseEvent,
  useImperativeHandle,
} from 'react';
import { omit, useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { CloseLine } from '@casts/icons';

import { defaultInputProps } from './default-props';
import { useInput } from './hooks';
import { InputProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/input.scss';

type InputRef = HTMLInputElement | null;

export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<InputRef>) => {
    const propsWithDefault = useDefaultProps(props, defaultInputProps);

    const {
      autoWidth,
      disabled,
      maxLength,
      placeholder,
      prefix,
      suffix,
      tips,
      clearable,
      type,
      name,
    } = propsWithDefault;

    const { getPrefixCls } = useConfig();

    const {
      classes,
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
      onClick,
      ...rest
    } = useInput({
      getPrefixCls,
      ...propsWithDefault,
    });

    useImperativeHandle<InputRef, InputRef>(ref, () => inputRef.current, [
      inputRef,
    ]);

    const focusInput = (e: MouseEvent<HTMLElement>) => {
      onClick?.(e);
      inputRef.current?.focus();
    };

    const innerValue = (composingRefValue || value) ?? '';

    return (
      <div className={wrapClasses} style={wrapStyles}>
        <div role="presentation" className={classes} onClick={focusInput}>
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...omit(rest as any, 'composingRef')}
            className={`${prefixCls}-inner`}
            value={innerValue}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            ref={inputRef}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            type={type}
            name={name}
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
