import clsx from 'clsx';
import { UseHeaderProps } from '../types';

export const useHeader = (props: UseHeaderProps) => {
  const { getPrefixCls, className, ...rest } = props;
  const prefixCls = getPrefixCls('layout-header');

  const classes = clsx(prefixCls, className);

  return {
    classes,
    ...rest,
  };
};
