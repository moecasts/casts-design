import { FC } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { ParagraphProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/typography.scss';

export const Paragraph: FC<ParagraphProps> = (props) => {
  const { children, className, ...rest } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
