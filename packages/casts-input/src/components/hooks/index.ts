import clsx from 'clsx';
import { noop, useControlled } from '@casts/hooks';

import {
  ChangeEvent,
  CompositionEvent,
  useEffect,
  useRef,
  useState,
  FocusEventHandler,
  useMemo,
  CSSProperties,
  ReactNode,
  PointerEventHandler,
} from 'react';
import {
  ChangeEventHandler,
  InputShape,
  InputSize,
  InputStatus,
} from '../types';
import { GetPrefixCls } from '@casts/config-provider';

export type UseInputProps = {
  clearable?: boolean;
  onPointerDown?: PointerEventHandler<HTMLInputElement>;
  onPointerLeave?: PointerEventHandler<HTMLInputElement>;
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
  prefix?: ReactNode;
  shape?: InputShape;
  size?: InputSize;
  status?: InputStatus;
  style?: CSSProperties;
  suffix?: ReactNode;
  tips?: ReactNode;
  defaultValue?: string;
  value?: string;
  getPrefixCls: GetPrefixCls;
};

export const useInput = (props: UseInputProps) => {
  const {
    autoWidth,
    clearable = true,
    className,
    disabled,
    getPrefixCls,
    maxLength,
    onBlur,
    onChange: onChangeFromProps = noop,
    onCompositionEnd,
    onCompositionStart,
    onFocus,
    shape,
    size,
    status,
    style,
    placeholder,
  } = props;

  const [value, onChange] = useControlled(props, 'value', onChangeFromProps);
  const valueLength = useMemo(() => String(value || '')?.length || 0, [value]);
  const [focused, setFocused] = useState(false);
  const prefixCls = getPrefixCls('input');
  const classes = clsx(prefixCls, className, {
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

  const clearValue = (e) => {
    if (!clearable) {
      return;
    }

    onChange?.('', { e });
  };

  return {
    clearValue,
    value,
    onChange,
    valueLength,
    focused,
    setFocused,
    prefixCls,
    classes,
    wrapClasses,
    wrapStyles,
    inputRef,
    inputPreRef,
    composingRef,
    composingRefValue,
    setComposingRefValue,
    handleFocus,
    handleBlur,
    handleChange,
    handleCompositionStart,
    handleCompositionEnd,
  };
};
