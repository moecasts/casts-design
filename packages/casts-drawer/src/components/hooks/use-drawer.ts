import { CSSProperties, KeyboardEventHandler, MouseEventHandler } from 'react';
import {
  getSlideAnimationName,
  noop,
  useControlled,
  useScrollLock,
} from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { CdsMotionDurationFast } from '@casts/theme';
import { clsx } from 'clsx';

import { defaultDrawerProps } from '../default-props';
import { ChangeTriggerEnum, UseDrawerProps } from '../types';

export const useDrawer = (props: UseDrawerProps) => {
  const {
    className,
    style,
    onChange = noop,
    placement = defaultDrawerProps.placement!,
    closeOnEscKeydown,
    closeOnMaskClick,
    closeable,

    preventScrollThroughWhenVisible,
    ...rest
  } = props;

  const [visible, setVisible] = useControlled<boolean>(
    props,
    'visible',
    onChange,
  );

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('drawer');

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(`${prefixCls}-root`, className);

  const overlayClasses = clsx(`${prefixCls}-overlay`);

  const drawerClasses = clsx(`${prefixCls}`, {
    [`${prefixCls}--${placement}`]: placement,
    [`${prefixCls}--closeable`]: closeable,
  });

  const drawerStyles: CSSProperties = {
    animationName: getSlideAnimationName(visible, placement),
    animationDuration: CdsMotionDurationFast,
    animationTimingFunction: 'cubic-bezier(.21,1.02,.73,1)',
    animationFillMode: 'forwards',
  };

  const drawerHeaderClasses = clsx(`${prefixCls}-header`);
  const drawerFooterClasses = clsx(`${prefixCls}-footer`);
  const drawerContentClasses = clsx(`${prefixCls}-content`);

  const drawerCloseClasses = clsx(`${prefixCls}-close`);

  const styles: CSSProperties = { ...style };

  /* --------------------------------- event handlers ---------------------------------------- */
  const handleCloseClick: MouseEventHandler = (e) => {
    if (!closeable) {
      return;
    }

    setVisible(false, { e, trigger: ChangeTriggerEnum.CLOSE });
  };

  const handleMaskClick: MouseEventHandler = (e) => {
    if (!closeOnMaskClick) {
      return;
    }
    setVisible(false, { e, trigger: ChangeTriggerEnum.MASK });
  };

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (closeOnEscKeydown && e.code === 'Escape') {
      setVisible(false, { e, trigger: ChangeTriggerEnum.ESC });
    }
  };

  useScrollLock({
    lock: preventScrollThroughWhenVisible && visible,
  });

  return {
    ...rest,
    classes,
    styles,

    overlayClasses,

    drawerClasses,
    drawerStyles,

    drawerHeaderClasses,
    drawerContentClasses,
    drawerFooterClasses,

    drawerCloseClasses,

    visible,

    handleCloseClick,
    handleMaskClick,
    handleKeyDown,
  };
};
