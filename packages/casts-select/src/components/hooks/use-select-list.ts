import { CSSProperties, useCallback, useEffect, useRef } from 'react';
import { useConfig } from '@casts/config-provider';
import { useVirtualizer } from '@tanstack/react-virtual';
import { clsx } from 'clsx';

import { useSelectContext } from '../select-context';
import { UseSelectListProps } from '../types/select-list';
import { getVirtual } from '../utils';

export const useSelectList = (props: UseSelectListProps) => {
  const { style, className, options = [], ...rest } = props;
  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('select-list');
  const optionSelectedCls = getPrefixCls('select-option--selected');

  const { value } = useSelectContext();
  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className);

  const styles: CSSProperties = { ...style };

  const listRef = useRef<HTMLUListElement>(null);

  const virtualScrollContainerClasses = `${prefixCls}-virtual-scroll-container`;

  const virtualScrollListClasses = `${prefixCls}-virtual-scroll-list`;

  /* --------------------------------- virtual scroll ---------------------------------------- */
  const virtual = getVirtual(props.virtual);

  const shouldEnableVirtual = virtual && options.length >= virtual.threshold;

  const virtualizer = useVirtualizer({
    count: options.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => 32,
  });

  const optionSelectedIndex = options.findIndex(
    (option) => value === option.value,
  );

  /* --------------------------------- events ---------------------------------------- */
  const scrollSelectedOptionIntoView = useCallback(() => {
    if (shouldEnableVirtual) {
      virtualizer.scrollToIndex(optionSelectedIndex);
      return;
    }

    const listElement = listRef.current;

    if (!listElement) {
      return;
    }

    const firstSelectedElement = listElement.querySelector<HTMLElement>(
      `.${optionSelectedCls}`,
    );

    if (!firstSelectedElement) {
      return;
    }

    const { paddingTop } = getComputedStyle(listElement);

    const top =
      firstSelectedElement.offsetTop +
      firstSelectedElement.offsetHeight +
      parseInt(paddingTop) -
      listElement.offsetHeight;

    if (top <= 0) {
      return;
    }

    listElement?.scrollTo({
      top,
    });
  }, [
    optionSelectedCls,
    optionSelectedIndex,
    shouldEnableVirtual,
    virtualizer,
  ]);

  useEffect(() => {
    scrollSelectedOptionIntoView();
  }, [scrollSelectedOptionIntoView]);

  return {
    ...rest,
    classes,
    styles,

    virtualScrollContainerClasses,
    virtualScrollListClasses,

    listRef,
    options,
    shouldEnableVirtual,
    virtual,
    virtualizer,
  };
};
