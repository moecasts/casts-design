import clsx from 'clsx';

import { UseFooterProps } from '../types';

export const useFooter = (props: UseFooterProps) => {
  const { getPrefixCls, className, ...rest } = props;
  const prefixCls = getPrefixCls('layout-footer');

  const classes = clsx(prefixCls, className);

  return {
    ...rest,
    classes,
  };
};
