import { CSSProperties, KeyboardEvent, MouseEvent } from 'react';
import { noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { useDropdownContext } from '../dropdown-context';
import { UseDropdownItemProps } from '../types';

export const useDropdownItem = (props: UseDropdownItemProps) => {
  const {
    className,
    style,
    value,
    onClick,
    hasChildren,
    renderChildren,
    onOpenChange = noop,
    ...rest
  } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('dropdown-item');

  const contextValue = useDropdownContext();

  const [_open, setOpen] = useControlled(props, 'open', onOpenChange, false);
  const open = contextValue.open && _open;

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--active`]: open,
  });
  const styles: CSSProperties = {
    minWidth: contextValue?.minColumnWidth,
    maxWidth: contextValue?.maxColumnWidth,
    ...style,
  };

  const contentClasses = `${prefixCls}-content`;
  const arrowClasses = `${prefixCls}-arrow`;

  const popupPrefixCls = getPrefixCls('dropdown-popup');
  const popupClasses = clsx(popupPrefixCls, {
    [`${popupPrefixCls}--${contextValue.size}`]: contextValue.size,
  });

  const isSubMenu = Boolean(hasChildren || renderChildren);

  const handleClick = (event: KeyboardEvent | MouseEvent) => {
    if (isSubMenu) {
      return;
    }
    contextValue?.handleClick?.(value, {
      event,
    });
    onClick?.(value, { event });
  };

  return {
    ...rest,
    hasChildren,
    renderChildren,
    classes,
    styles,
    contentClasses,
    arrowClasses,
    popupClasses,
    open,
    setOpen,
    handleClick,
  };
};
