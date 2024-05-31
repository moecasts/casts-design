import { CSSProperties, KeyboardEvent, MouseEvent } from 'react';
import { isKeyboardConfirm, isUndefined } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { useTabsContext } from '../context';
import { TabValue } from '../types';
import { UseTabsBarItemProps } from '../types';

export const useTabsBarItem = (props: UseTabsBarItemProps) => {
  const { className, style, value: itemValue, disabled, ...rest } = props;
  const { getPrefixCls } = useConfig();

  const { value, onChange } = useTabsContext();

  const prefixCls = getPrefixCls('tabs-bar-item');

  const isActive = itemValue === value;

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--active`]: isActive,
    [`${prefixCls}--disabled`]: disabled,
  });

  const styles: CSSProperties = {
    ...style,
  };

  const innerClasses = `${prefixCls}-inner`;

  const handleClick = (
    value?: TabValue,
    _context: { e?: MouseEvent<HTMLElement> } = {},
  ) => {
    if (disabled) {
      return;
    }
    if (isUndefined(value)) {
      return;
    }
    onChange?.(value);
  };

  const handleKeyDown = (
    value?: TabValue,
    context: { e?: KeyboardEvent<HTMLElement> } = {},
  ) => {
    if (disabled) {
      return;
    }

    const { e } = context;
    if (!isKeyboardConfirm(e?.code)) {
      return;
    }
    handleClick(value);
  };

  return {
    ...rest,
    classes,
    styles,
    innerClasses,
    handleClick,
    handleKeyDown,
    disabled,
    isActive,
  };
};
