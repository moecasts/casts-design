import { FC } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { ParagraphProps } from './types';

export const Paragraph: FC<ParagraphProps> = (props) => {
  const { children } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls);

  return <div className={classes}>{children}</div>;
};
