import '@fontsource/roboto-mono';
import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { useRipple } from '@casts/common';

import { usePaginationItem } from './hooks';
import { PaginationItemProps } from './types';

export const PaginationItem = forwardRef(
  (props: PaginationItemProps, ref: Ref<HTMLLIElement>) => {
    const { page, classes, styles, handleClick, handleKeyDown } =
      usePaginationItem(props);

    const buttonRef = useRef<HTMLLIElement>(null);

    useRipple(buttonRef);

    useImperativeHandle(ref, () => buttonRef.current as HTMLLIElement);

    return (
      <li
        ref={buttonRef}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        tabIndex={0}
        className={classes}
        style={styles}
        key={page}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {page}
      </li>
    );
  },
);

PaginationItem.displayName = 'PaginationItem';
