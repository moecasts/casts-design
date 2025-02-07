import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import {
  getKeyboardEvents,
  isFunction,
  KEYCODE_CONFIRM,
  useRipple,
} from '@casts/common';
import { FlipVerticalArrowLine } from '@casts/icons';
import { Popup } from '@casts/popup';

import { useDropdownItem } from './hooks';
import { DropdownItemProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/dropdown.scss';

export const DropdownItem = forwardRef(
  (props: DropdownItemProps, ref: Ref<HTMLLIElement>) => {
    const {
      children,
      classes,
      styles,
      contentClasses,
      arrowClasses,
      hasChildren,
      popupClasses,
      renderChildren,
      open,
      setOpen,
      handleClick,
    } = useDropdownItem(props);

    const listRef = useRef<HTMLLIElement>(null);

    useRipple(listRef, {
      disabled: Boolean(hasChildren || renderChildren),
    });

    useImperativeHandle(ref, () => listRef.current as HTMLLIElement);

    const item = (
      <li
        role="menuitem"
        ref={listRef}
        className={classes}
        style={styles}
        onClick={handleClick}
        onKeyDown={getKeyboardEvents([[KEYCODE_CONFIRM, handleClick]])}
      >
        <span className={contentClasses}>{children}</span>
        {(hasChildren || renderChildren) && (
          <FlipVerticalArrowLine className={arrowClasses} />
        )}
      </li>
    );

    if (isFunction(renderChildren)) {
      return (
        <Popup
          overlayOffset={-2}
          showArrow={false}
          content={renderChildren()}
          className={popupClasses}
          visible={open}
          onVisibleChange={(open) => {
            setOpen(open);
          }}
        >
          {item}
        </Popup>
      );
    }

    return item;
  },
);

DropdownItem.displayName = 'DropdownItem';
