import { FC } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { TypographyProps } from './types';

import './styles/typography.scss';

export const Typography: FC<TypographyProps> = (props) => {
  const { children } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls);

  return <article className={classes}>{children}</article>;
};
