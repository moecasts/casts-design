import { FC } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { HeadingProps } from './types';

import './styles/typography.scss';

export const Heading: FC<HeadingProps> = (props) => {
  const { level, children, ...rest } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');
  const classes = clsx(prefixCls);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = `h${level}` as any;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};
