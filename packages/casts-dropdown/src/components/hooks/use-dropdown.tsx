import { isFunction } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { DropdownItem } from '../dropdown-item';
import { DropdownMenu } from '../dropdown-menu';
import { DropdownOption, UseDropdownProps } from '../types';

export const useDropdown = (props: UseDropdownProps) => {
  const { options, renderContent: propRenderContent, size, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('dropdown');

  /* --------------------------------- classes and styles ---------------------------------------- */
  const popupClasses = clsx(`${prefixCls}-popup`, {
    [`${prefixCls}-popup--${size}`]: size,
  });

  /* --------------------------------- render ---------------------------------------- */
  const renderContent = () => {
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

      const renderItem = (option: DropdownOption) => {
        const renderChildren = option.children
          ? () => renderOptions(option.children)
          : undefined;

        return (
          <DropdownItem
            key={option.value}
            value={option.value}
            renderChildren={renderChildren}
          >
            {option.label}
          </DropdownItem>
        );
      };

      return (
        <DropdownMenu>
          {options?.map((option) => renderItem(option))}
        </DropdownMenu>
      );
    };

    return renderOptions(options);
  };

  return {
    ...rest,
    size,
    popupClasses,

    renderContent,
  };
};
