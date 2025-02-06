import { forwardRef, Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { Button } from '@casts/button';
import { useDefaultProps } from '@casts/common';
import { CloseLine } from '@casts/icons';
import { Portal } from '@casts/portal';
import { CdsMotionDurationRapid } from '@casts/theme';
import { CSSTransition } from 'react-transition-group';

import { defaultDrawerProps } from './default-props';
import { useDrawer } from './hooks';
import { DrawerProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/drawer.scss';

export const Drawer = forwardRef(
  (props: DrawerProps, ref: Ref<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultDrawerProps);

    const {
      classes,
      styles,
      overlayClasses,
      drawerClasses,
      drawerStyles,

      drawerHeaderClasses,
      drawerContentClasses,
      drawerFooterClasses,

      drawerCloseClasses,

      children,
      handleKeyDown,
      handleMaskClick,
      handleCloseClick,
      visible,
    } = useDrawer(propsWithDefault);

    const { destroyOnClose, mask, closeable, header, footer } =
      propsWithDefault;

    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    useEffect(() => {
      if (visible) {
        containerRef.current?.focus?.();
      }
    }, [visible]);

    return (
      <Portal>
        <CSSTransition
          in={visible}
          mountOnEnter
          nodeRef={containerRef}
          timeout={parseInt(CdsMotionDurationRapid)}
          unmountOnExit={destroyOnClose}
        >
          <div
            ref={containerRef}
            className={classes}
            style={styles}
            role="presentation"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
          >
            {mask && (
              <CSSTransition
                in={visible}
                nodeRef={overlayRef}
                timeout={200}
                classNames={'cds-fade'}
                unmountOnExit
              >
                <div
                  role="presentation"
                  className={overlayClasses}
                  tabIndex={-1}
                  onClick={handleMaskClick}
                  ref={overlayRef}
                ></div>
              </CSSTransition>
            )}
            <CSSTransition in={visible} nodeRef={drawerRef} timeout={200}>
              <div
                className={drawerClasses}
                style={drawerStyles}
                ref={drawerRef}
              >
                {closeable && (
                  <Button
                    className={drawerCloseClasses}
                    variant="text"
                    size="small"
                    icon={<CloseLine size="16" />}
                    theme="neutral"
                    onClick={handleCloseClick}
                  ></Button>
                )}
                {header && <div className={drawerHeaderClasses}>{header}</div>}
                <div className={drawerContentClasses}>{children}</div>
                {footer && <div className={drawerFooterClasses}>{footer}</div>}
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>
      </Portal>
    );
  },
);

Drawer.displayName = 'Drawer';
