import { KeyboardEvent, useRef, useState } from 'react';
import { dropUndefinedProps, noop, useControlled } from '@casts/common';

import {
  ContextEvent,
  OpenChangeTrigger,
  OpenChangeTriggerEnum,
  UseDialogProps,
} from '../types';

export const useDialog = (props: UseDialogProps) => {
  const {
    keyboard,
    onOpenChange = noop,
    open: propsOpen,
    defaultOpen,
    onCancel,
    onConfirm,
    onOutsideClick,
    dialogContainerRef,
    destroyOnClose: propsDestroyOnClose,
    isPlugin,
    ...rest
  } = props;

  const [open, setOpen] = useControlled(
    dropUndefinedProps({ open: propsOpen, defaultOpen }),
    'open',
    onOpenChange,
  );
  const [destroyOnClose, setDestroyOnClose] = useState(propsDestroyOnClose);

  const handleCancel = (
    e: ContextEvent,
    trigger: OpenChangeTrigger = OpenChangeTriggerEnum.CUSTOM,
  ) => {
    const open = false;
    const context = { e, trigger };

    !isPlugin && setOpen(open, context);
    onCancel?.(open, context);
  };

  const handleConfirm = (
    e: ContextEvent,
    trigger: OpenChangeTrigger = OpenChangeTriggerEnum.CUSTOM,
  ) => {
    const open = false;
    const context = { e, trigger };
    !isPlugin && setOpen(open, context);
    onConfirm?.(open, context);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (keyboard && e.code === 'Escape') {
      handleCancel(e, OpenChangeTriggerEnum.ESC);
      return;
    }

    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      handleConfirm(e, OpenChangeTriggerEnum.ENTER);
      return;
    }
  };

  const handleOutsideClick = (e: ContextEvent) => {
    const { target } = e;

    if (!open) {
      return;
    }

    if (dialogClickRef.current) {
      dialogClickRef.current = false;
    } else if (target === dialogContainerRef?.current) {
      const trigger = OpenChangeTriggerEnum.MASK;
      const open = false;
      const context = { e, trigger };
      handleCancel?.(e, trigger);
      onOutsideClick?.(open, context);
      return;
    }
  };

  const dialogClickRef = useRef(false);

  const handleDialogClick = () => {
    dialogClickRef.current = true;
  };

  const [dialogDisplay, setDialogDisplay] = useState('');
  const updateDialogDisplay = () => {
    if (open) {
      return setDialogDisplay('block');
    }
    return setDialogDisplay('none');
  };

  return {
    ...rest,
    open,
    setOpen,
    destroyOnClose,
    setDestroyOnClose,
    dialogClickRef,
    handleCancel,
    handleConfirm,
    dialogDisplay,
    updateDialogDisplay,
    handleKeyDown,
    handleOutsideClick,
    handleDialogClick,
    isPlugin,
  };
};
