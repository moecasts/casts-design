import {
  Children,
  ComponentType,
  CSSProperties,
  isValidElement,
  ReactNode,
  useCallback,
} from 'react';
import { isComponentOfType } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Popup } from '@casts/popup';
import { clsx } from 'clsx';

import { DropdownDivider } from '../dropdown-divider';
import { DropdownItem } from '../dropdown-item';
import { DropdownMenu } from '../dropdown-menu';
import { DropdownSection } from '../dropdown-section';
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

  const renderOptions = useCallback((options: ReactNode) => {
    const content = Children.map(options, (child) => {
      if (!isValidElement(child)) {
        return null;
      }

      const childType = child.type as unknown as ComponentType;

      if (
        isComponentOfType(childType, DropdownSection) ||
        isComponentOfType(childType, DropdownItem) ||
        isComponentOfType(childType, DropdownMenu) ||
        isComponentOfType(childType, DropdownDivider) ||
        isComponentOfType(childType, Popup)
      ) {
        return child;
      }
      return null;
    });

    return content;
  }, []);

  return {
    ...rest,
    classes,
    styles,
    renderOptions,
  };
};
