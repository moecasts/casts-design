import clsx from 'clsx';

import { UseContentProps } from '../types';

export const useContent = (props: UseContentProps) => {
  const { getPrefixCls, className, ...rest } = props;
  const prefixCls = getPrefixCls('layout-content');

  const classes = clsx(prefixCls, className);

  return {
    ...rest,
    classes,
  };
};
