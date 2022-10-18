import clsx from 'clsx';
import { cloneElement, FC, ReactElement, useContext } from 'react';
import { ConfigContext } from '@casts/config-provider';
import { MessageProps, MessageTheme } from './types';
import {
  CheckboxCircleFill,
  CloseCircleFill,
  CloseLine,
  InformationFill,
} from '@casts/icons';
import { CircularProgress } from '@casts/progress';

import './styles/message.scss';

const getThemeIcon = (theme: `${MessageTheme}`) => {
  const iconMap = {
    info: InformationFill,
    success: CheckboxCircleFill,
    warning: InformationFill,
    error: CloseCircleFill,
    loading: CircularProgress,
  };

  return iconMap[theme] || iconMap.info;
};

export const Message: FC<MessageProps> = (props) => {
  const {
    theme = MessageTheme.INFO,
    content,
    icon = true,
    fill,
    close = false,
    onClose,
    className,
    style,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('message');

  const messageCls = clsx(prefixCls, className, {
    [`${prefixCls}--${theme}`]: theme,
    [`${prefixCls}--fill`]: fill,
  });

  const IconComponent =
    icon === true
      ? getThemeIcon(theme)
      : (props = {}) => cloneElement(icon as ReactElement, props);

  return (
    <div className={messageCls} style={style}>
      {icon && (
        <span className={`${prefixCls}-icon`}>
          <IconComponent />
        </span>
      )}
      <div className={`${prefixCls}-content`}>{content}</div>
      {close && (
        <button className={`${prefixCls}-close`} onClick={onClose}>
          {close === true ? <CloseLine /> : close}
        </button>
      )}
    </div>
  );
};
