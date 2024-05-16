import { CSSProperties } from 'react';
import { noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { useDropdownContext } from '../dropdown-context';
import { UseDropdownItemProps } from '../types';

export const useDropdownItem = (props: UseDropdownItemProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('dropdown-item');

  const contextValue = useDropdownContext();

  const [visible, setVisible] = useControlled<boolean>(
    props,
    'visible',
    noop,
    false,
  );

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--active`]: visible,
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

  return {
    ...rest,
    classes,
    styles,
    contentClasses,
    arrowClasses,
    popupClasses,
    visible,
    setVisible,
  };
};
