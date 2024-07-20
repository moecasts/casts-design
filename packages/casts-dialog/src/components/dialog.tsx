import {
  forwardRef,
  Ref,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { noop, useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Portal } from '@casts/portal';
import { CdsMotionDurationFast } from '@casts/theme';
import { CSSTransition } from 'react-transition-group';

import { defaultDialogProps } from './default-props';
import { DialogCard } from './dialog-card';
import {
  useDialog,
  useDialogClasses,
  useDialogFocus,
  useDialogPosition,
} from './hooks';
import { OpenChangeTriggerEnum } from './types';
import type { DialogInstance, DialogProps } from './types/dialog';

export const DEFAULT_DURATION = parseFloat(CdsMotionDurationFast);

export const Dialog = forwardRef(
  (props: DialogProps, ref: Ref<DialogInstance>) => {
    const propsWithDefault = useDefaultProps(props, defaultDialogProps);
    const { getPrefixCls } = useConfig(propsWithDefault.isPlugin);

    const portalRef = useRef<HTMLDivElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);
    const dialogContainerRef = useRef<HTMLDivElement>(null);

    const { containerClasses, maskClasses, expandClasses, maskStyle } =
      useDialogClasses({
        ...propsWithDefault,
        getPrefixCls,
      });

    const {
      open,
      setOpen,
      destroyOnClose,
      setDestroyOnClose,
      handleCancel,
      handleConfirm,
      handleKeyDown,
      handleOutsideClick,
      handleDialogClick,
      maskless,
      header,
      children,
      content,
      footer,
      title,
      dialogDisplay,
      updateDialogDisplay,
      closeable,
      simple,
      single,
    } = useDialog({
      ...propsWithDefault,
      getPrefixCls,
      dialogContainerRef,
      dialogRef,
    });

    const disablePositionRef = useRef(false);

    useDialogPosition({ open, dialogRef, disabledRef: disablePositionRef });

    useDialogFocus({
      open,
      dialogRef: dialogContainerRef,
      single,
      hide: () => {
        disablePositionRef.current = true;
        setOpen(false, { trigger: OpenChangeTriggerEnum.INTERNAL });
      },
      show: () => {
        disablePositionRef.current = true;
        setOpen(true, { trigger: OpenChangeTriggerEnum.INTERNAL });
      },
      ...propsWithDefault,
    });

    useImperativeHandle(ref, () => ({
      show: () => {
        disablePositionRef.current = false;
        setOpen(true, { trigger: OpenChangeTriggerEnum.CUSTOM });
      },
      hide: () => {
        setDestroyOnClose(false);
        setOpen(false, { trigger: OpenChangeTriggerEnum.CUSTOM });
      },
      destroy: () => {
        setDestroyOnClose(true);
        setOpen(false, { trigger: OpenChangeTriggerEnum.CUSTOM });
      },
      update: noop,
    }));

    const renderMask = useCallback(() => {
      if (maskless) {
        return null;
      }

      return (
        <CSSTransition
          timeout={DEFAULT_DURATION}
          in={open}
          classNames={getPrefixCls('fade')}
          unmountOnExit
          nodeRef={maskRef}
          appear
        >
          <div className={maskClasses} ref={maskRef} style={maskStyle}></div>
        </CSSTransition>
      );
    }, [getPrefixCls, maskless, maskStyle, open, maskClasses]);

    return (
      <CSSTransition
        in={open}
        timeout={DEFAULT_DURATION}
        mountOnEnter
        unmountOnExit={destroyOnClose}
        nodeRef={portalRef}
        onEnter={updateDialogDisplay}
        onExited={updateDialogDisplay}
      >
        <Portal ref={portalRef}>
          {renderMask()}
          <CSSTransition
            timeout={DEFAULT_DURATION}
            in={open}
            classNames={expandClasses}
            nodeRef={dialogRef}
            appear
          >
            <div
              role="button"
              tabIndex={0}
              className={containerClasses}
              ref={dialogContainerRef}
              onClick={handleOutsideClick}
              onKeyDown={handleKeyDown}
              style={{ display: dialogDisplay }}
            >
              <DialogCard
                title={title}
                header={header}
                closeable={closeable}
                simple={simple}
                content={content}
                footer={footer}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                ref={dialogRef}
                onMouseDown={handleDialogClick}
              >
                {children}
              </DialogCard>
            </div>
          </CSSTransition>
        </Portal>
      </CSSTransition>
    );
  },
);

Dialog.displayName = 'Dialog';
