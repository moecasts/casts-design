import { cloneElement, FC, ReactElement } from 'react';
import { useConfig } from '@casts/config-provider';
import {
  CheckboxCircleFill,
  CloseCircleFill,
  CloseLine,
  InformationFill,
} from '@casts/icons';
import { CircularProgress } from '@casts/progress';
import clsx from 'clsx';

import { NotificationProps, NotificationTheme } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/notification.scss';

const getThemeIcon = (theme: NotificationTheme) => {
  const iconMap = {
    info: InformationFill,
    success: CheckboxCircleFill,
    warning: InformationFill,
    error: CloseCircleFill,
    loading: CircularProgress,
  };

  return iconMap[theme] || iconMap.info;
};

export const Notification: FC<NotificationProps> = (props) => {
  const {
    theme = 'info',
    content,
    icon = true,
    solid,
    close,
    onClose,
    className,
    style,
    title,
    footer,
  } = props;

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('notification');

  const notificationClasses = clsx(prefixCls, className, {
    [`${prefixCls}--${theme}`]: theme,
    [`${prefixCls}--theme-solid`]: solid,
  });

  const IconComponent =
    icon === true
      ? getThemeIcon(theme)
      : (props = {}) => cloneElement(icon as ReactElement, props);

  return (
    <div className={notificationClasses} style={style}>
      {icon && (
        <span className={`${prefixCls}-icon`}>
          <IconComponent />
        </span>
      )}
      <div className={`${prefixCls}-body`}>
        <div className={`${prefixCls}-header`}>
          <span className={`${prefixCls}-title`}>{title}</span>
        </div>
        <div className={`${prefixCls}-content`}>{content}</div>
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
      {close && (
        <button className={`${prefixCls}-close`} onClick={onClose}>
          {close === true ? <CloseLine /> : close}
        </button>
      )}
    </div>
  );
};
