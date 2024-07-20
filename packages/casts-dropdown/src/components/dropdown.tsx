import { forwardRef, Ref, useImperativeHandle } from 'react';
import { pick, useDefaultProps } from '@casts/common';
import { Popup } from '@casts/popup';

import { defaultDropdownProps } from './default-props';
import { DropdownProvider } from './dropdown-context';
import { useDropdown } from './hooks';
import { DropdownProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/dropdown.scss';

export const Dropdown = forwardRef((props: DropdownProps, ref: Ref<any>) => {
  const propsWithDefault = useDefaultProps(props, defaultDropdownProps);
  const {
    children,
    renderContent,
    popupClasses,
    trigger,
    open,
    handleOpenChange,
    handleClick,
    placement,
    nestedPlacement,
    ...restProps
  } = useDropdown(propsWithDefault);

  const content = renderContent();

  useImperativeHandle(ref, () => ({}));

  const contextValue = {
    open,
    handleClick,
    handleOpenChange,
    ...pick(restProps, [
      'hideAfterClick',
      'size',
      'maxHeight',
      'minColumnWidth',
      'maxColumnWidth',
    ]),
  };

  return (
    <DropdownProvider {...contextValue}>
      <Popup
        content={content}
        placement={placement}
        nestedPlacement={nestedPlacement}
        showArrow={false}
        className={popupClasses}
        trigger={trigger}
        visible={open}
        onVisibleChange={handleOpenChange}
      >
        {children}
      </Popup>
    </DropdownProvider>
  );
});

Dropdown.displayName = 'Dropdown';
