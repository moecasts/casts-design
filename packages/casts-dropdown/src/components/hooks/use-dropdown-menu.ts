import { Children, CSSProperties, isValidElement } from 'react';
import { useConfig } from '@casts/config-provider';
import { Popup } from '@casts/popup';
import { clsx } from 'clsx';

import { DropdownDivider } from '../dropdown-divider';
import { DropdownItem } from '../dropdown-item';
import { DropdownMenu } from '../dropdown-menu';
import { UseDropdownProps as UseDropdownMenuProps } from '../types';

export const useDropdownMenu = (props: UseDropdownMenuProps) => {
  const { className, style, options: _propOptions, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('dropdown-menu');

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = {
    ...style,
  };

  const options = Children.map(props.options, (child) => {
    if (!isValidElement(child)) {
      return null;
    }

    if (
      child.type === DropdownItem ||
      child.type === DropdownMenu ||
      child.type === DropdownDivider ||
      child.type === Popup
    ) {
      return child;
    }

    return null;
  });

  return {
    ...rest,
    classes,
    styles,
    options,
  };
};
