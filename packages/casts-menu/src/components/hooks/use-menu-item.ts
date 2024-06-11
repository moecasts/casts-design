import { KeyboardEvent, MouseEvent } from 'react';
import { isKeyboardConfirm } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { UseMenuItemProps } from '../types';
import { useMenuContext, useSubMenuContext } from './use-menu-context';

export const useMenuItem = (props: UseMenuItemProps) => {
  const { className, value, onClick, activatable, onKeyDown } = props;

  const { getPrefixCls } = useConfig();

  const subMenuContext = useSubMenuContext();

  const disabled = props.disabled ?? subMenuContext.disabled;

  const { size, active, setState, onChange } = useMenuContext();

  const prefixCls = getPrefixCls('menu-item');

  const classes = clsx(`${prefixCls}`, className, {
    [`${prefixCls}--${size}`]: size,
  });

  const innerClasses = clsx(`${prefixCls}-inner`, {
    [`${prefixCls}-inner--active`]: active === value,
    [`${prefixCls}-inner--disabled`]: disabled,
  });

  const contentClasses = `${prefixCls}-content`;

  const prefixIconClasses = `${prefixCls}-prefix-icon`;
  const suffixIconClasses = `${prefixCls}-suffix-icon`;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) {
      return;
    }

    if (activatable && value) {
      setState?.({ active: value });
      onChange?.(value);
    }

    onClick?.({ e: event });

    if (
      subMenuContext.hideAfterClick &&
      subMenuContext.expandType === 'popup'
    ) {
      subMenuContext.onOpenChange?.(false);
    }
  };

  const focusable =
    props.focusable ?? (subMenuContext.open !== false && !disabled);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.({ e: event });

    if (!isKeyboardConfirm(event.code)) {
      return;
    }

    handleClick(event as unknown as MouseEvent<HTMLElement>);
  };

  return {
    classes,
    innerClasses,
    handleClick,
    handleKeyDown,

    contentClasses,
    prefixIconClasses,
    suffixIconClasses,

    disabled,
    focusable,
  };
};
