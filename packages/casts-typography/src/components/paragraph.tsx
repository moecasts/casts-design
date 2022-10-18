import { FC, ReactNode } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

export type ParagraphProps = {
  children?: ReactNode;
};

export const Paragraph: FC<ParagraphProps> = (props: ParagraphProps) => {
  const { children } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls);

  return <div className={classes}>{children}</div>;
};
