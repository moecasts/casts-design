import {
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
  RefObject,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useCollapse } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import {
  CheckboxCircleFill,
  CloseCircleFill,
  CloseLine,
  InformationFill,
} from '@casts/icons';
import { CdsMotionDurationFast } from '@casts/theme';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

import { AlertProps, AlertTheme } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/alert.scss';

const getThemeIcon = (theme: AlertTheme) => {
  const iconMap = {
    info: InformationFill,
    success: CheckboxCircleFill,
    warning: InformationFill,
    error: CloseCircleFill,
  };

  return iconMap[theme] || iconMap.info;
};

export const DEFAULT_DURATION = parseFloat(CdsMotionDurationFast);

export const Alert = forwardRef(
  (props: AlertProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      theme = 'info',
      content,
      icon = true,
      solid,
      close = true,
      onClose,
      className,
      style,
      title,
      footer,
      visible = true,
      duration = DEFAULT_DURATION,
    } = props;

    const [show, setShow] = useState(visible);
    const { getPrefixCls } = useConfig();
    const prefixCls = getPrefixCls('alert');

    useEffect(() => {
      setShow(visible);
    }, [visible]);

    const alertClasses = clsx(prefixCls, className, {
      [`${prefixCls}--${theme}`]: theme,
      [`${prefixCls}--theme-solid`]: solid,
      [`${prefixCls}--banner`]: true,
    });

    const IconComponent =
      icon === true
        ? getThemeIcon(theme)
        : (props = {}) => cloneElement(icon as ReactElement, props);

    const fadeClasses = getPrefixCls('fade');

    const styles = {
      ...style,
      [`--${fadeClasses}-transition-duration`]: `${duration}ms`,
    };

    const { collapseRef, collapseStyles } = useCollapse({
      open: show,
      duration,
      animateTransform: true,
    });

    useImperativeHandle(ref, () => collapseRef.current as HTMLDivElement);

    return (
      <>
        <CSSTransition
          in={show}
          timeout={duration}
          nodeRef={collapseRef}
          unmountOnExit
        >
          <div
            className={alertClasses}
            style={{ ...styles, ...collapseStyles }}
            ref={collapseRef as RefObject<HTMLDivElement>}
          >
            {icon && (
              <span className={`${prefixCls}-icon`}>
                <IconComponent />
              </span>
            )}
            <div className={`${prefixCls}-body`}>
              {title && (
                <div className={`${prefixCls}-header`}>
                  <span className={`${prefixCls}-title`}>{title}</span>
                </div>
              )}
              <div className={`${prefixCls}-content`}>{content}</div>
              {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
            </div>
            {close && (
              <button
                className={`${prefixCls}-close`}
                onClick={() => {
                  onClose?.();
                  setShow(false);
                }}
              >
                {close === true ? <CloseLine /> : close}
              </button>
            )}
          </div>
        </CSSTransition>
      </>
    );
  },
);

Alert.displayName = 'Alert';
