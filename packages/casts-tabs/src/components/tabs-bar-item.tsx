import { forwardRef, Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { useRipple } from '@casts/common';

import { useTabsBarItem } from './hooks';
import { TabsBarItemProps } from './types';

export const TabsBarItem = forwardRef(
  (props: TabsBarItemProps, ref: Ref<HTMLButtonElement>) => {
    const itemRef = useRef<HTMLButtonElement>(null);

    const {
      classes,
      styles,
      label,
      isActive,
      disabled,
      handleClick,
      handleKeyDown,
    } = useTabsBarItem({
      ...props,
      itemRef,
    });

    useRipple(itemRef, { disabled });

    useImperativeHandle(ref, () => itemRef.current as HTMLButtonElement, [
      itemRef,
    ]);

    useEffect(() => {
      if (
        !isActive ||
        !document.hasFocus() ||
        document.activeElement === document.body
      ) {
        return;
      }

      itemRef.current?.focus();
    }, [isActive]);

    return (
      <button
        role="tab"
        tabIndex={isActive ? 0 : -1}
        className={classes}
        style={styles}
        ref={itemRef}
        aria-disabled={disabled}
        onClick={(e) => handleClick(props.value, { e })}
        onKeyDown={(e) => handleKeyDown(props.value, { e })}
      >
        {label}
      </button>
    );
  },
);

TabsBarItem.displayName = 'TabsBarItem';
