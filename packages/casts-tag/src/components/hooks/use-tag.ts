import { CSSProperties, KeyboardEvent, useMemo, useState } from 'react';
import { has, isKeyboardConfirm, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { defaultTagProps } from '../default-props';
import { UseTagProps } from '../types';

export const useTag = (props: UseTagProps) => {
  const {
    className,
    style,
    size = defaultTagProps.size,
    variant = defaultTagProps.variant,
    checkable,
    onChange: onChangeFromProps = noop,

    disabled,
    bordered,
  } = props;

  const [checked, setChecked] = useControlled<boolean>(
    props,
    'checked',
    onChangeFromProps,
  );

  const handleClick = () => {
    setChecked(!checked);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isKeyboardConfirm(e.code)) {
      return;
    }

    setChecked(!checked);
  };

  const checkedProps = {
    ...defaultTagProps.checkedProps,
    ...props.checkedProps,
  };

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('tag');

  const theme = useMemo(() => {
    if (checkable && checked && has(checkedProps, 'theme')) {
      return checkedProps.theme;
    }

    return props.theme;
  }, [checked, checkable, props.theme, checkedProps.theme]);

  const pastel = useMemo(() => {
    if (checkable && checked && has(checkedProps, 'pastel')) {
      return checkedProps.pastel;
    }

    return props.pastel ?? defaultTagProps.pastel;
  }, [checked, checkable, props.pastel, checkedProps.pastel]);

  /* --------------------------------- classes ---------------------------------------- */
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${theme}`]: theme,
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${variant}`]: variant,
    [`${prefixCls}--pastel`]: pastel,
    [`${prefixCls}--checkable`]: checkable,
    [`${prefixCls}--bordered`]: bordered,
    [`${prefixCls}--disabled`]: disabled,
  });
  const styles: CSSProperties = { ...style };

  const contentClasses = `${prefixCls}-content`;
  const prefixClasses = `${prefixCls}-prefix`;

  const suffixClasses = `${prefixCls}-suffix`;

  const closeClasses = `${prefixCls}-close`;

  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    if (checked) {
      return;
    }

    setVisible(false);
  };

  return {
    visible,
    handleClose,

    classes,
    styles,

    prefixClasses,
    contentClasses,
    suffixClasses,
    closeClasses,

    handleClick,
    handleKeyDown,
  };
};
