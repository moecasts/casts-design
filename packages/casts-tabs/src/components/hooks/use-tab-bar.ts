import { CSSProperties, KeyboardEvent, useEffect, useMemo } from 'react';
import { filter, isUndefined, map } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { useTabsContext } from '../context';
import { TabValue, UseTabsBarProps } from '../types';

export const useTabBar = (props: UseTabsBarProps) => {
  const {
    className,
    style,
    barContainerRef,
    barScrollRef,
    itemsRef,
    offset = 4,
  } = props;
  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('tabs-bar');

  const classes = clsx(prefixCls, className);

  const containerClasses = `${prefixCls}-container`;

  const styles: CSSProperties = {
    ...style,
  };

  const tabValues = useMemo(
    () =>
      map(
        filter(props.items, (item) => item.props.disabled !== true),
        'props.value',
      ),
    [props.items],
  );

  const { value, onChange } = useTabsContext();

  const currentTabValueIndex = useMemo(() => {
    return tabValues.indexOf(value) || 0;
  }, [tabValues, value]);

  const getNextTabValue = () => {
    const isCurrentAtLast = currentTabValueIndex >= tabValues.length - 1;
    if (isCurrentAtLast) {
      return tabValues[currentTabValueIndex];
    }

    const nextTabValueIndex = currentTabValueIndex + 1 || 0;

    return tabValues[nextTabValueIndex];
  };
  const getPrevTabValue = () => {
    const isCurrentAtFirst = currentTabValueIndex <= 0;
    if (isCurrentAtFirst) {
      return tabValues[currentTabValueIndex];
    }

    const prevTabValueIndex = currentTabValueIndex - 1 || 0;

    return tabValues[prevTabValueIndex];
  };

  const handleKeyDown = (context: { e?: KeyboardEvent<HTMLElement> } = {}) => {
    const { e } = context;

    let tabValue: TabValue | undefined = undefined;
    if (e?.code === 'ArrowLeft') {
      tabValue = getPrevTabValue();
    }
    if (e?.code === 'ArrowRight') {
      tabValue = getNextTabValue();
    }

    if (!isUndefined(tabValue)) {
      onChange?.(tabValue);
    }
  };

  /* --------------------------------- bar scroll behavior ---------------------------------------- */
  useEffect(() => {
    const barContainer = barContainerRef?.current;
    const activeTabItemElement = itemsRef.current?.[currentTabValueIndex];
    if (!barContainer || !activeTabItemElement) {
      return;
    }

    const offsetLeft = Math.max(
      activeTabItemElement.offsetLeft -
        barContainer.clientWidth +
        activeTabItemElement.scrollWidth * 1.5 +
        offset,
      0,
    );
    const offsetTop = 0;

    barScrollRef.current?.scrollTo(-1 * offsetLeft, -1 * offsetTop);
  }, [barContainerRef, barScrollRef, itemsRef, offset]);

  return {
    classes,
    containerClasses,
    styles,
    handleKeyDown,
  };
};
