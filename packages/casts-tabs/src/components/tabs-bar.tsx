import {
  Children,
  ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import BScroll, { BScrollInstance } from '@better-scroll/core';
import MouseWheel from '@better-scroll/mouse-wheel';
import { isCanUseDocument } from '@casts/common';
import {
  CdsMotionDurationImmediate,
  CdsMotionDurationRapid,
  CdsMotionDurationSustained,
} from '@casts/theme';

import { useTabBar } from './hooks';
import { TabsBarItem } from './tabs-bar-item';
import { TabsBarProps } from './types';

if (isCanUseDocument()) {
  BScroll.use(MouseWheel);
}

export const TabsBar = forwardRef(
  (props: TabsBarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const barRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const barScrollRef = useRef<BScrollInstance>();

    const setBarRef = useCallback((node: HTMLDivElement | null) => {
      if (node === barRef.current || barScrollRef.current) {
        return;
      }

      barRef.current = node;

      if (barRef.current !== null) {
        barScrollRef.current = new BScroll(barRef.current, {
          probeType: 3,
          scrollY: false,
          scrollX: true,
          bounce: false,
          click: true,
          momentum: true,
          swipeTime: parseFloat(CdsMotionDurationSustained),
          swipeBounceTime: parseFloat(CdsMotionDurationImmediate),
          disableTouch: false,
          disableMouse: false,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: parseFloat(CdsMotionDurationRapid),
          },
        });
        return;
      }

      barScrollRef.current = undefined;
    }, []);

    const items = Children.map(props.items, (child, index) => {
      const { label, value, disabled } = child.props;
      return (
        <TabsBarItem
          label={label}
          value={value}
          disabled={disabled}
          ref={(node) => {
            itemsRef.current[index] = node;
          }}
        />
      );
    });

    const { classes, containerClasses, styles, handleKeyDown } = useTabBar({
      ...props,
      barContainerRef: barRef,
      barScrollRef,
      itemsRef,
    });

    useImperativeHandle(ref, () => barRef.current as HTMLDivElement, [barRef]);

    return (
      <div
        role="tablist"
        tabIndex={-1}
        className={classes}
        style={styles}
        ref={setBarRef}
        onKeyDown={(e) => handleKeyDown({ e })}
      >
        <div className={containerClasses}>{items}</div>
      </div>
    );
  },
);

TabsBar.displayName = 'TabsBar';
