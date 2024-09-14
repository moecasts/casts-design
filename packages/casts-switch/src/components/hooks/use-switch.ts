import {
  CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
  useState,
} from 'react';
import { addEventListener, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseSwitchProps } from '../types';

export const useSwitch = (props: UseSwitchProps) => {
  const {
    loading,
    style,
    disabled,
    onChange = noop,
    checkedIcon,
    uncheckedIcon,
    size,
    shape,
    ...rest
  } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('switch');

  /* --------------------------------- states ---------------------------------------- */
  const [checked, setChecked] = useControlled(props, 'checked', onChange);

  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    if (disabled || loading) {
      return;
    }

    setChecked(!checked);
  };

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, {
    [`${prefixCls}--loading`]: loading,
    [`${prefixCls}--checked`]: checked,
    [`${prefixCls}--pressed`]: pressed,
    [`${prefixCls}--disabled`]: disabled,
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${shape}`]: shape,
  });

  const indicatorClasses = `${prefixCls}-indicator`;

  const indicatorHandleClasses = `${prefixCls}-indicator-handle`;
  const indicatorHandleIconClasses = `${prefixCls}-indicator-handle-icon`;
  const indicatorHandleIconLoadingClasses = `${prefixCls}-indicator-handle-icon-loading`;
  const indicatorPlaceholderClasses = `${prefixCls}-indicator-placeholder`;
  const indicatorStartClasses = `${prefixCls}-indicator-start`;
  const indicatorEndClasses = `${prefixCls}-indicator-end`;

  const labelClasses = `${prefixCls}-label`;

  const styles: CSSProperties = { ...style };

  const handlePressStart = (
    e:
      | ReactKeyboardEvent<HTMLLabelElement>
      | ReactMouseEvent<HTMLLabelElement>
      | ReactTouchEvent<HTMLLabelElement>,
  ) => {
    if (
      e.nativeEvent instanceof KeyboardEvent &&
      e.nativeEvent.code !== 'Space'
    ) {
      return;
    }

    if (!(e.nativeEvent instanceof TouchEvent)) {
      e.preventDefault();
    }

    setPressed(true);

    addEventListener(
      document,
      ['mouseup', 'touchcancel', 'touchend'],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (e) => handlePressEnd(e as any),
      {
        once: true,
      },
    );
  };

  const handlePressEnd = (
    e: ReactKeyboardEvent<HTMLLabelElement> | ReactMouseEvent<HTMLLabelElement>,
  ) => {
    if (
      e.nativeEvent instanceof KeyboardEvent &&
      e.nativeEvent.code !== 'Space'
    ) {
      return;
    }

    e.preventDefault();
    setPressed(false);
    handleChange();
  };

  const handleBlur = () => {
    setPressed(false);
  };

  const renderHandleIcon = () => {
    if (checked) {
      return checkedIcon;
    }

    return uncheckedIcon;
  };

  return {
    ...rest,
    classes,
    styles,

    indicatorClasses,
    indicatorPlaceholderClasses,
    indicatorHandleClasses,
    indicatorStartClasses,
    indicatorEndClasses,

    indicatorHandleIconClasses,
    indicatorHandleIconLoadingClasses,

    labelClasses,

    checked,
    handleChange,

    loading,
    disabled,

    handlePressStart,
    handlePressEnd,

    handleBlur,

    renderHandleIcon,
  };
};
