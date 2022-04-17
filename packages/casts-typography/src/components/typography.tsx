import { FC, ReactNode, useContext } from 'react';
import { ConfigContext } from '@casts/config-provider';
import clsx from 'clsx';

export type TypographyProps = {
  children?: ReactNode;
};

export const Typography: FC<TypographyProps> = (props: TypographyProps) => {
  const { children } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls);

  return <article className={classes}>{children}</article>;
};
