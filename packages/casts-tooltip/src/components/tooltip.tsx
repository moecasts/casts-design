import { FC } from 'react';
import { useConfig } from '@casts/config-provider';
import { Popup } from '@casts/popup';
import clsx from 'clsx';

import { TooltipProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/tooltip.scss';

export const Tooltip: FC<TooltipProps> = (props) => {
  const { className, shape = 'round', ...rest } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('tooltip');
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${shape}`]: shape,
  });

  return <Popup className={classes} {...rest} />;
};
