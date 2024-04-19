import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { useDropdownContext } from '../dropdown-context';
import { UseDropdownItemProps } from '../types';

export const useDropdownItem = (props: UseDropdownItemProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('dropdown-item');

  const contextValue = useDropdownContext();

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = {
    minWidth: contextValue?.minColumnWidth,
    maxWidth: contextValue?.maxColumnWidth,
    ...style,
  };

  const contentClasses = `${prefixCls}-content`;
  const arrowClasses = `${prefixCls}-arrow`;

  return {
    ...rest,
    classes,
    styles,
    contentClasses,
    arrowClasses,
  };
};
