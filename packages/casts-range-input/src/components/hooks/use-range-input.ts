import {
  ChangeEvent,
  CompositionEvent,
  CSSProperties,
  FocusEventHandler,
  MouseEvent,
  useRef,
  useState,
} from 'react';
import { noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { RangeInputValue, UseRangeInputProps } from '../types';

export const START_INDEX = 0;
export const END_INDEX = 1;

const defaultValue = ['', ''];

export const useRangeInput = (props: UseRangeInputProps) => {
  const {
    clearable,
    className,
    disabled,
    maxLength: propMaxLength,
    onBlur,
    onChange: onChangeFromProps = noop,
    onCompositionEnd,

    onCompositionStart,
    onFocus,
    shape,
    size,
    status,
    style,
    placeholder: propPlaceholder,
    defaultValue: _defaultValue,
    bordered,
    onClick,
    ...rest
  } = props;

  const [value, onChange] = useControlled(
    props,
    'value',
    onChangeFromProps,
    defaultValue,
  );

  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

  const [focused, setFocused] = useState(false);
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('range-input');

  const styles: CSSProperties = { ...style };

  const wrapClasses = clsx(`${prefixCls}-wrap`, {
    [`${prefixCls}-wrap--${size}`]: size,
    [`${prefixCls}-wrap--${status}`]: status,
    [`${prefixCls}-wrap--disabled`]: disabled,
  });

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--focused`]: focused,
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${shape}`]: shape,
    [`${prefixCls}--bordered`]: bordered,
  });

  const innerClasses = `${prefixCls}-inner`;

  const prefixClasses = `${prefixCls}-prefix`;
  const separatorClasses = `${prefixCls}-separator`;
  const suffixClasses = `${prefixCls}-suffix`;
  const tipsClasses = `${prefixCls}-tips`;
  const clearClasses = `${prefixCls}-clear`;

  const placeholder = Array.isArray(propPlaceholder)
    ? propPlaceholder
    : [propPlaceholder, propPlaceholder];

  const maxLength = Array.isArray(propMaxLength)
    ? propMaxLength
    : [propMaxLength, propMaxLength];

  const composingRef = useRef<boolean>(false);
  const [composingRefValue, setComposingRefValue] =
    useState<RangeInputValue>(defaultValue);

  const [startValue, endValue] = value || [];
  const [startPlaceholder, endPlaceholder] = placeholder;
  const [startComposingRefValue, endComposingRefValue] = composingRefValue;

  const handleCompositionStart = (
    index: number,
    e: CompositionEvent<HTMLInputElement>,
  ) => {
    composingRef.current = true;
    const {
      currentTarget: { value: currentValue },
    } = e;

    const newValue: RangeInputValue = [...value];
    newValue[index] = currentValue;

    onCompositionStart?.(newValue, { e });
  };

  const handleCompositionEnd = (
    index: number,
    e: CompositionEvent<HTMLInputElement>,
  ) => {
    if (composingRef.current) {
      composingRef.current = false;
      handleChange(index, e);
    }
    const {
      currentTarget: { value: currentValue },
    } = e;

    const newValue: RangeInputValue = [...value];
    newValue[index] = currentValue;

    setComposingRefValue(defaultValue);
    onCompositionEnd?.(newValue, { e });
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    !focused && setFocused(true);
    onFocus?.(e);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    focused && setFocused(false);
    onBlur?.(e);
  };

  const handleChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement> | CompositionEvent<HTMLInputElement>,
  ) => {
    let {
      currentTarget: { value: currentValue },
    } = e;
    if (composingRef.current) {
      const newValue: RangeInputValue = [...value];
      newValue[index] = currentValue;
      setComposingRefValue(newValue);
      return;
    }

    const currentMaxLength = maxLength[index];

    if (currentMaxLength) {
      currentValue = currentValue.substring(0, currentMaxLength);
    }

    const newValue: RangeInputValue = [...value];
    newValue[index] = currentValue;

    onChange?.(newValue, { e });
  };

  const focusInput = (e: MouseEvent<HTMLElement>) => {
    onClick?.(e);

    if ((e.target as HTMLElement).tagName === 'INPUT' || focused) {
      return;
    }

    let closestInput: HTMLInputElement | null = null as any;
    let smallestDistance = Infinity;

    const inputs = [startInputRef.current, endInputRef.current].filter(
      Boolean,
    ) as HTMLInputElement[];

    inputs.forEach(function (input) {
      const rect = input.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(e.clientX - rect.left, 2) + Math.pow(e.clientY - rect.top, 2),
      );
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestInput = input;
      }
    });

    if (closestInput) {
      closestInput.focus();
    }
  };

  const clearValue = (e: MouseEvent<HTMLElement>) => {
    if (!clearable) {
      return;
    }

    onChange?.(defaultValue, { e, action: 'clear' });
  };

  return {
    ...rest,
    clearable,
    wrapClasses,
    classes,
    prefixClasses,
    innerClasses,
    separatorClasses,
    suffixClasses,
    tipsClasses,
    clearClasses,
    styles,

    placeholder,

    handleFocus,
    handleBlur,
    handleChange,
    value,

    composingRef,

    startValue,
    startPlaceholder,
    startComposingRefValue,
    endValue,
    endPlaceholder,
    endComposingRefValue,

    handleCompositionStart,
    handleCompositionEnd,
    composingRefValue,

    startInputRef,
    endInputRef,

    focusInput,
    clearValue,

    disabled,
  };
};
