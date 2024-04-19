import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseDropdownDividerProps } from '../types';

export const useDropdownDivider = (props: UseDropdownDividerProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('dropdown-divider');

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className);

  const styles: CSSProperties = { ...style };

  return {
    ...rest,
    classes,
    styles,
  };
};
