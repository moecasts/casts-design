import { isFunction } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Popup } from '@casts/popup';
import { clsx } from 'clsx';

import { DropdownItem } from '../dropdown-item';
import { DropdownOption, UseDropdownProps } from '../types';

export const useDropdown = (props: UseDropdownProps) => {
  const {
    options,
    renderContent: propRenderContent,
    size = 'medium',
    ...rest
  } = props;

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
        if (option.children) {
          return (
            <Popup
              content={renderOptions(option.children)}
              placement="right-start"
              showArrow={false}
              className={popupClasses}
              key={option.value}
            >
              <DropdownItem key={option.value} value={option.value}>
                {option.label}
              </DropdownItem>
            </Popup>
          );
        }

        return (
          <DropdownItem key={option.value} value={option.value}>
            {option.label}
          </DropdownItem>
        );
      };

      return <>{options?.map((option) => renderItem(option))}</>;
    };

    return renderOptions(options);
  };

  return {
    ...rest,
    popupClasses,

    renderContent,
  };
};
