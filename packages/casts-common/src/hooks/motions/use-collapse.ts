import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useUpdateEffect } from 'ahooks';
import { camelCase, filter, noop } from 'lodash-es';

import { Direction, DirectionEnum } from '../../types';
import { getStyle, isValueEmpty } from '../../utils';
import { useCallbackState } from '../use-callback-state';
import { useControlled } from '../use-controlled';

export type UseCollapseProps = {
  /** Whether to expand the content area */
  open?: boolean;
  /** Whether to expand the content by default */
  defaultOpen?: boolean;
  /** Callback function when `open` change */
  onChange?: (open?: boolean) => void;
  /** Collapse direction */
  direction?: Direction;
  /** Transition duration */
  duration?: number;
  /** With opacity animation */
  animateOpacity?: boolean;
  /** With scale animation */
  animateTransform?: boolean;
};

export const DEFAULT_DURATION = 200;

export const useCollapse = (props: UseCollapseProps) => {
  const {
    onChange = noop,
    direction = DirectionEnum.Vertical,
    duration = DEFAULT_DURATION,
    animateOpacity = true,
    animateTransform,
  } = props;

  const [open, setOpen] = useControlled(props, 'open', onChange);

  const toggleCollapse = () => setOpen(!open);

  const collapseRef = useRef<HTMLElement>(null);
  const [height, setHeight] = useCallbackState<CSSProperties['height']>(
    () => (open ? '' : 0),
    true,
  );

  const [width, setWidth] = useCallbackState<CSSProperties['width']>(
    () => (open ? '' : 0),
    true,
  );

  const dimensionPropertyName =
    direction === DirectionEnum.Horizontal ? 'max-width' : 'max-height';
  const dimension = direction === DirectionEnum.Horizontal ? width : height;

  /* --------------------------------- handle collapse/expand animation ---------------------------------------- */
  const handleCollapse = useCallback(() => {
    if (!collapseRef.current) {
      return;
    }

    if (direction === DirectionEnum.Vertical) {
      setHeight(collapseRef.current.scrollHeight, () => {
        requestAnimationFrame(() => {
          setHeight(0);
        });
      });
      return;
    }

    setWidth(collapseRef.current.scrollWidth, () => {
      requestAnimationFrame(() => {
        setWidth(0);
      });
    });
  }, [direction, setHeight, setWidth]);

  const handleExpand = useCallback(() => {
    if (!collapseRef.current) {
      return;
    }

    if (direction === DirectionEnum.Vertical) {
      const height = collapseRef.current.scrollHeight;

      setHeight(0, () => {
        requestAnimationFrame(() => setHeight(height));
      });
      return;
    }

    const width = collapseRef.current.scrollWidth;
    setWidth(0, () => {
      requestAnimationFrame(() => setWidth(width));
    });
  }, [direction, setHeight, setWidth]);

  // Reset dimension after transition end
  const onTransitionEnd = useCallback(
    (e: TransitionEvent) => {
      if (e.propertyName !== dimensionPropertyName) {
        return;
      }

      if (!open) {
        return;
      }

      if (direction === DirectionEnum.Vertical) {
        setHeight('');
        return;
      }

      setWidth('');
    },
    [dimensionPropertyName, direction, open, setHeight, setWidth],
  );

  useUpdateEffect(() => {
    if (open) {
      handleExpand();
      return;
    }

    handleCollapse();
  }, [open]);

  const [boxSizing, setBoxSizing] = useState('');

  useEffect(() => {
    if (!collapseRef.current) {
      return;
    }

    const node = collapseRef.current;

    const boxSizing =
      (collapseRef.current && getStyle(collapseRef.current)?.boxSizing) || '';
    setBoxSizing(boxSizing);

    node.addEventListener('transitionend', onTransitionEnd);
    return () => node.removeEventListener('transitionend', onTransitionEnd);
  }, [onTransitionEnd, open]);

  /* --------------------------------- collapse/expand styles ---------------------------------------- */
  const getCollapseStyles = useCallback(() => {
    if (isValueEmpty(dimension)) {
      if (!open) {
        return { [camelCase(dimensionPropertyName)]: 0 };
      }
      return {};
    }

    /* --------------------------------- transition styles ---------------------------------------- */
    const transitionProperty = filter(
      [
        'padding',
        'border-width',
        direction === DirectionEnum.Vertical && 'max-height',
        direction === DirectionEnum.Horizontal && 'max-width',
        animateOpacity && 'opacity',
        animateTransform && 'transform',
      ],
      (item) => Boolean(item),
    ).join(',');

    const style: CSSProperties = {
      transitionProperty,
      transitionDuration: `${duration}ms`,
    };

    if (animateOpacity && !isValueEmpty(dimension)) {
      style.opacity = dimension ? 1 : 0;
    }

    if (animateTransform && !isValueEmpty(dimension)) {
      style.transform = `scale(${dimension ? 1 : 0.9})`;
      style.transformOrigin =
        direction === DirectionEnum.Horizontal ? 'left' : 'top';
    }

    if (!isValueEmpty(dimension)) {
      style.overflow = 'hidden';
    }

    const isBorderBox = boxSizing === 'border-box';

    /* --------------------------------- dimension styles ---------------------------------------- */
    if (direction === DirectionEnum.Vertical && !isValueEmpty(height)) {
      style.maxHeight = `${height}px`;

      if (!isBorderBox && !height) {
        style.paddingTop = '0px';
        style.paddingBottom = '0px';
        style.borderTop = '0px';
        style.borderBottom = '0px';
      }
    }

    if (direction === DirectionEnum.Horizontal && !isValueEmpty(width)) {
      style.maxWidth = `${width}px`;

      if (!isBorderBox && !width) {
        style.paddingLeft = '0px';
        style.paddingRight = '0px';
        style.borderLeft = '0px';
        style.borderRight = '0px';
      }
    }

    return style;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    animateOpacity,
    animateTransform,
    dimension,
    direction,
    duration,
    height,
    width,
    boxSizing,
  ]);

  const collapseStyles = useMemo(
    () => getCollapseStyles(),
    [getCollapseStyles],
  );

  return {
    collapseRef,
    collapseStyles,
    handleCollapse,
    handleExpand,
    onTransitionEnd,
    toggleCollapse,
  };
};
