import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { isFunction, useRipple } from '@casts/common';
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
      visible,
      setVisible,
    } = useDropdownItem(props);

    const listRef = useRef<HTMLLIElement>(null);

    useRipple(listRef, {
      disabled: Boolean(hasChildren || renderChildren),
    });

    useImperativeHandle(ref, () => listRef.current as HTMLLIElement);

    const item = (
      <li ref={listRef} className={classes} style={styles}>
        <span className={contentClasses}>{children}</span>
        {(hasChildren || renderChildren) && (
          <FlipVerticalArrowLine className={arrowClasses} />
        )}
      </li>
    );

    if (isFunction(renderChildren)) {
      return (
        <Popup
          showArrow={false}
          content={renderChildren()}
          className={popupClasses}
          visible={visible}
          onVisibleChange={(visible) => setVisible(visible)}
        >
          {item}
        </Popup>
      );
    }

    return item;
  },
);

DropdownItem.displayName = 'DropdownItem';
