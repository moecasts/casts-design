import clsx from 'clsx';
import { UseAsideProps } from '../types';

export const useAside = (props: UseAsideProps) => {
  const { getPrefixCls, className, ...rest } = props;
  const prefixCls = getPrefixCls('layout-aside');

  const classes = clsx(prefixCls, className);

  return {
    classes,
    ...rest,
  };
};
