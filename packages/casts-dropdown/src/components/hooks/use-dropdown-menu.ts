import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseDropdownProps as UseDropdownMenuProps } from '../types';

export const useDropdownMenu = (props: UseDropdownMenuProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('dropdown-menu');

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = {
    ...style,
  };

  return {
    ...rest,
    classes,
    styles,
  };
};
