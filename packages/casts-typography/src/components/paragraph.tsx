import { FC, ReactNode, useContext } from 'react';
import { ConfigContext } from '@casts/config-provider';
import clsx from 'clsx';

export type ParagraphProps = {
  children?: ReactNode;
};

export const Paragraph: FC<ParagraphProps> = (props: ParagraphProps) => {
  const { children } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls);

  return <p className={classes}>{children}</p>;
};
