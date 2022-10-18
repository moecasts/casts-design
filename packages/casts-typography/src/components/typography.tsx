import clsx from 'clsx';
import { useConfig } from '@casts/config-provider';
import { FC, ReactNode } from 'react';

export type TypographyProps = {
  children?: ReactNode;
};

export const Typography: FC<TypographyProps> = (props: TypographyProps) => {
  const { children } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls);

  return <article className={classes}>{children}</article>;
};
