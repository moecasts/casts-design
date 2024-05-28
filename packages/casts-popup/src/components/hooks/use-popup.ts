import { CSSProperties, useCallback, useEffect, useRef } from 'react';
import { getTargetElement, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import clsx from 'clsx';

import { defaultPopupProps } from '../default-props';
import { UsePopupProps } from '../types';

const SIDES_MAP: Record<string, string> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
};

const ARROW_SIZE = 8;

export const usePopup = (props: UsePopupProps) => {
  const {
    className,
    style,
    trigger = 'hover',
    arrowSize = ARROW_SIZE,
    shadow = true,
    theme = defaultPopupProps.theme,
    attach,
    delay = 0,
    duration,
    disabledAutoPlacement,
    onVisibleChange = noop,
    overlayOffset = 4,
  } = props;

  /* --------------------------------- open state ---------------------------------------- */
  const [open, setOpen] = useControlled(props, 'visible', onVisibleChange);

  /* --------------------------------- classes ---------------------------------------- */
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('popup');
  const rootId = `${prefixCls}-root`;
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--shadow`]: shadow,
    [`${prefixCls}--${theme}`]: theme,
  });
  const contentClasses = `${prefixCls}-content`;
  const arrowClasses = `${prefixCls}-arrow`;
  const fadeClasses = clsx(getPrefixCls('fade'));

  /* --------------------------------- floating ui hook ---------------------------------------- */
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;

  const floatingReturn: any = useFloating({
    nodeId,
    placement: isNested ? props.nestedPlacement : props.placement,
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(overlayOffset + arrowSize),
      flip({
        mainAxis: !disabledAutoPlacement,
        crossAxis: !disabledAutoPlacement,
      }),
      shift({ padding: 8 }),
      arrow({
        element: arrowRef,
        padding: arrowSize,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const {
    placement,
    refs,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = { x: 0, y: 0 } },
    context,
    update,
    floatingStyles,
  } = floatingReturn;

  const isNotManualTrigger = trigger !== 'manual';

  const interactionsReturn = useInteractions([
    useHover(context, {
      restMs: delay,
      enabled: trigger === 'hover',
      handleClose: safePolygon(),
    }),
    useClick(context, {
      enabled: trigger === 'click',
    }),
    useFocus(context, {
      enabled: isNotManualTrigger && !duration,
      visibleOnly: true,
    }),
    useDismiss(context, {
      enabled: isNotManualTrigger && !duration,
    }),
    useRole(context, { role: 'tooltip' }),
  ]);

  const arrowRefCallback = useCallback(
    (node: HTMLDivElement | null) => {
      arrowRef.current = node;
      update();
    },
    [update],
  );

  const styles: CSSProperties = {
    ...floatingStyles,
    ...style,
  };

  const staticSide = SIDES_MAP[placement.split('-')[0]];
  const arrowStyles = {
    width: `${arrowSize}px`,
    height: `${arrowSize}px`,
    top: arrowY != null ? `${arrowY}px` : '',
    left: arrowX != null ? `${arrowX}px` : '',
    right: '',
    bottom: '',
    [staticSide]: `-${arrowSize / 2}px`,
  };

  const attachElement = getTargetElement(attach) as HTMLElement | null;

  /* --------------------------------- effects  ---------------------------------------- */

  useEffect(() => {
    if (!duration || trigger !== 'click') {
      return;
    }

    const timerId = setTimeout(() => {
      setOpen(false);
    }, duration);
    return () => clearTimeout(timerId);
  }, [open, duration, trigger, setOpen]);

  return {
    rootId,
    attachElement,

    classes,
    styles,
    contentClasses,
    arrowClasses,

    fadeClasses,

    arrowRefCallback,
    arrowStyles,

    open,

    /* --------------------------------- floating ui ---------------------------------------- */
    nodeId,

    refs,
    update,

    floatingReturn,
    interactionsReturn,
  };
};
