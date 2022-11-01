import clsx from 'clsx';
import { FC } from 'react';
import { TypographyProps } from './types';
import { useConfig } from '@casts/config-provider';

export const Typography: FC<TypographyProps> = (props) => {
  const { children } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls);

  return <article className={classes}>{children}</article>;
};
