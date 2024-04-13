import { FC } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { TypographyProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/typography.scss';

export const Typography: FC<TypographyProps> = (props) => {
  const { children, className, ...rest } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls, className);

  return (
    <article className={classes} {...rest}>
      {children}
    </article>
  );
};
