import { forwardRef, Ref, useImperativeHandle } from 'react';
import { pick } from '@casts/common';
import { Popup } from '@casts/popup';

import { DropdownProvider } from './dropdown-context';
import { useDropdown } from './hooks';
import { DropdownProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/dropdown.scss';

export const Dropdown = forwardRef((props: DropdownProps, ref: Ref<any>) => {
  const { children, renderContent, popupClasses, ...restProps } =
    useDropdown(props);

  const content = renderContent();

  useImperativeHandle(ref, () => ({}));

  const contextValue = pick(restProps, [
    'maxHeight',
    'minColumnWidth',
    'maxColumnWidth',
  ]);

  return (
    <DropdownProvider {...contextValue}>
      <Popup
        content={content}
        placement="bottom-start"
        showArrow={false}
        className={popupClasses}
      >
        {children}
      </Popup>
    </DropdownProvider>
  );
});

Dropdown.displayName = 'Dropdown';
