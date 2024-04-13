import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import {
  formatSizeUnit,
  isFunction,
  isUndefined,
  throttle,
} from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseAffixProps } from '../types';
import { getFixedBottom, getFixedTop, getTargetRect } from '../utils';

const TRIGGER_EVENTS = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
] as const;

const updateAffixStyles = (dom: HTMLElement, styles: CSSProperties = {}) => {
  if (!dom) {
    return;
  }

  const {
    position = '',
    top = '',
    bottom = '',
    height = '',
    width = '',
  } = styles;

  dom.style.position = position;
  dom.style.top = formatSizeUnit(top);
  dom.style.bottom = formatSizeUnit(bottom);
  dom.style.height = formatSizeUnit(height);
  dom.style.width = formatSizeUnit(width);
};

export const useAffix = (props: UseAffixProps) => {
  // eslint-disable-next-line no-empty-pattern
  const { className, style, offsetTop = 10, offsetBottom = 10 } = props;

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('affix');

  const [isFixed, setIsFixed] = useState(false);
  /* --------------------------------- classes and styles ---------------------------------------- */
  const wrapClasses = clsx(`${prefixCls}-wrap`, className);
  const classes = clsx(prefixCls, {
    [`${prefixCls}--fixed`]: isFixed,
  });
  const placeholderClasses = `${prefixCls}-placeholder`;
  const styles: CSSProperties = { ...style };

  /* --------------------------------- refs ---------------------------------------- */
  const affixRef = useRef<HTMLDivElement>(null);
  const affixWrapRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>();
  const scrollContainerRef = useRef<HTMLElement | Window>();

  useEffect(() => {
    if (isFunction(props.container)) {
      const container = props.container();
      if (container) {
        scrollContainerRef.current = container;
        return;
      }
    }
    scrollContainerRef.current = window;
  }, [props.container]);

  const handleFixedChange = (fixed: boolean) => {
    setIsFixed(fixed);
  };

  /* --------------------------------- scroll handlers ---------------------------------------- */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    throttle(() => {
      if (!affixRef.current) {
        return;
      }

      const containerElement = scrollContainerRef.current;
      const containerRect = getTargetRect(containerElement);

      const affixWrapRect = getTargetRect(affixWrapRef.current);

      const fixedTop = getFixedTop(affixWrapRect, containerRect, offsetTop);
      const fixedBottom = getFixedBottom(
        affixWrapRect,
        containerRect,
        offsetBottom,
      );

      if (isUndefined(fixedTop) && isUndefined(fixedBottom)) {
        updateAffixStyles(affixRef.current);

        if (placeholderRef.current) {
          placeholderRef.current.remove();
          placeholderRef.current = undefined;
        }
        handleFixedChange(false);
        return;
      }

      if (!placeholderRef.current) {
        placeholderRef.current = document.createElement('div');
      }
      placeholderRef.current.style.height = `${affixWrapRect.height}px`;
      placeholderRef.current.style.width = `${affixWrapRect.width}px`;
      affixWrapRef.current?.append(placeholderRef.current);

      updateAffixStyles(affixRef.current, {
        position: 'fixed',
        top: fixedTop,
        bottom: fixedBottom,
        height: affixWrapRect.height,
        width: affixWrapRect.width,
      });

      handleFixedChange(true);
    }, 0),
    [],
  );

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    handleScroll();
    TRIGGER_EVENTS.forEach((eventName) => {
      container.addEventListener(eventName, handleScroll);
    });

    return () => {
      TRIGGER_EVENTS.forEach((eventName) => {
        container.removeEventListener(eventName, handleScroll);
      });
    };
  }, [props.container]);

  return {
    /** classes and styles */
    wrapClasses,
    classes,
    styles,
    placeholderClasses,

    /** refs */
    affixWrapRef,
    affixRef,
    placeholderRef,
    scrollContainerRef,
  };
};
