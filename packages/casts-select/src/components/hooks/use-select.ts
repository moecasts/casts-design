import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { useSelectContext } from '../select-context';
import { UseSelectProps } from '../types';

export const useSelect = (props: UseSelectProps) => {
  const { className, style, onOutsideClick, multiple, size, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const { open, handleOpenChange } = useSelectContext();

  const prefixCls = getPrefixCls('select');

  /* --------------------------------- classes ---------------------------------------- */
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--open`]: open,
  });

  const styles: CSSProperties = { ...style };

  const arrowClasses = `${prefixCls}-arrow`;

  const listClasses = `${prefixCls}-list`;

  const popupClasses = clsx(`${prefixCls}-popup`, {
    [`${prefixCls}-popup--${size}`]: size,
  });

  /* --------------------------------- events ---------------------------------------- */
  const handleOutsideClick = (e: Event) => {
    if (!open) {
      return;
    }

    const newOpen = false;

    onOutsideClick?.(newOpen, { e });

    handleOpenChange?.(newOpen);
  };

  return {
    ...rest,

    classes,
    styles,

    arrowClasses,

    listClasses,

    open,
    handleOpenChange,

    popupClasses,

    handleOutsideClick,
  };
};
