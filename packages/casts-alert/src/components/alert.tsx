import {
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import {
  CheckboxCircleFill,
  CloseCircleFill,
  CloseLine,
  InformationFill,
} from '@casts/icons';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { AlertProps, AlertTheme } from './types';
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
      duration = 200,
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

    return (
      <>
        <CSSTransition
          in={show}
          timeout={duration}
          classNames={fadeClasses}
          unmountOnExit
        >
          <div className={alertClasses} style={styles} ref={ref}>
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
