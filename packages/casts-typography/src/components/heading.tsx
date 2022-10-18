import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { useConfig } from '@casts/config-provider';

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
} & Partial<Omit<HTMLHeadingElement, 'children'>>;

export const Heading: FC<HeadingProps> = (props: HeadingProps) => {
  const { level, children } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');
  const classes = clsx(prefixCls);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = `h${level}` as any;

  return <Component className={classes}>{children}</Component>;
};
