import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { useRipple } from '@casts/common';
import { FlipVerticalArrowLine } from '@casts/icons';

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
    } = useDropdownItem(props);

    const listRef = useRef<HTMLLIElement>(null);

    useRipple(listRef);

    useImperativeHandle(ref, () => listRef.current as HTMLLIElement);

    const list = (
      <li ref={listRef} className={classes} style={styles}>
        <span className={contentClasses}>{children}</span>
        {hasChildren && <FlipVerticalArrowLine className={arrowClasses} />}
      </li>
    );

    return list;
  },
);

DropdownItem.displayName = 'DropdownItem';
