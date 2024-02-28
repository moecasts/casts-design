import { CSSProperties, KeyboardEvent, useState } from 'react';
import { noop, useControlled } from '@casts/common';
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
  const [checked, setChecked] = useControlled<boolean>(
    props,
    'checked',
    onChange,
  );

  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    if (disabled) {
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
  const indicatorPlaceholderClasses = `${prefixCls}-indicator-placeholder`;
  const indicatorStartClasses = `${prefixCls}-indicator-start`;
  const indicatorEndClasses = `${prefixCls}-indicator-end`;

  const labelClasses = `${prefixCls}-label`;

  const styles: CSSProperties = { ...style };

  const handlePressStart = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.code !== 'Space') {
      return;
    }

    e.preventDefault();

    setPressed(true);
  };

  const handlePressEnd = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.code !== 'Space') {
      return;
    }

    e.preventDefault();
    setPressed(false);
    handleChange();
  };

  const renderHandleIcon = () => {
    if (checked) {
      return checkedIcon;
    }

    return uncheckedIcon;
  };

  return {
    classes,
    styles,

    indicatorClasses,
    indicatorPlaceholderClasses,
    indicatorHandleClasses,
    indicatorStartClasses,
    indicatorEndClasses,

    indicatorHandleIconClasses,

    labelClasses,

    checked,
    handleChange,

    disabled,

    handlePressStart,
    handlePressEnd,

    renderHandleIcon,
    ...rest,
  };
};
