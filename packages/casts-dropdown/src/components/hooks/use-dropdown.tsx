import { useCallback } from 'react';
import { isFunction, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { DropdownDivider } from '../dropdown-divider';
import { DropdownItem } from '../dropdown-item';
import { DropdownMenu } from '../dropdown-menu';
import { DropdownSection } from '../dropdown-section';
import {
  DropdownClickHandler,
  DropdownOption,
  DropdownOptionItem,
  UseDropdownProps,
} from '../types';

export const useDropdown = (props: UseDropdownProps) => {
  const {
    options,
    renderContent: propRenderContent,
    size,
    onClick,
    hideAfterClick,
    ...rest
  } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('dropdown');

  /* --------------------------------- states ---------------------------------------- */
  const [open, setOpen] = useControlled(
    props,
    'open',
    props.onOpenChange,
    false,
  );

  /* --------------------------------- classes and styles ---------------------------------------- */
  const popupClasses = clsx(`${prefixCls}-popup`, {
    [`${prefixCls}-popup--${size}`]: size,
  });

  /* --------------------------------- render ---------------------------------------- */
  const renderContent = useCallback(() => {
    if (propRenderContent && isFunction(propRenderContent)) {
      return propRenderContent();
    }

    if (!options) {
      return null;
    }

    const renderOptions = (options?: DropdownOption[]) => {
      if (!options) {
        return null;
      }

      const renderItem = (option: DropdownOption, index: number) => {
        const renderChildren = option.children
          ? () => renderOptions(option.children)
          : undefined;

        const key = option.value || `idx-${index}`;

        if (option.type === 'section') {
          return (
            <DropdownSection key={key} label={option.label}>
              {(option.children as DropdownOptionItem[])?.map((child, idx) =>
                renderItem(child, idx),
              )}
            </DropdownSection>
          );
        }

        if (option.type === 'divider') {
          return <DropdownDivider key={key} />;
        }

        return (
          <DropdownItem
            key={key}
            value={option.value}
            renderChildren={renderChildren}
          >
            {option.label}
          </DropdownItem>
        );
      };
      const children = options?.map((option, index) =>
        renderItem(option, index),
      );

      return <DropdownMenu>{children}</DropdownMenu>;
    };

    return renderOptions(options);
  }, [options, propRenderContent]);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const handleClick: DropdownClickHandler = (value, context) => {
    onClick?.(value, context);
    if (hideAfterClick) {
      setOpen(false);
    }
  };

  return {
    ...rest,
    size,
    popupClasses,
    renderContent,
    open,
    handleOpenChange,
    handleClick,
  };
};
