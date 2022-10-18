import { FC } from 'react';
import { Popup, PopupProps, PopupTrigger, PopupTheme } from '@casts/popup';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import './styles/tooltip.scss';

export type TooltipTheme = PopupTheme;
export type TooltipTrigger = PopupTrigger;
export type TooltipShape = 'square' | 'round' | 'circle';

export type TooltipProps = Omit<PopupProps, 'trigger' | 'theme'> & {
  trigger?: TooltipTrigger;
  theme?: TooltipTheme;
  shape?: TooltipShape;
};

export const Tooltip: FC<TooltipProps> = (props) => {
  const { className, shape = 'round', ...rest } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('tooltip');
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${shape}`]: shape,
  });

  return <Popup className={classes} {...rest} />;
};
