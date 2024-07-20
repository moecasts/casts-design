import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseMenuGroupProps } from '../types';

export const useMenuGroup = (props: UseMenuGroupProps) => {
  const { className } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('menu-group');

  const classes = clsx(prefixCls, className);

  const labelClasses = `${prefixCls}-label`;

  return {
    classes,
    labelClasses,
  };
};
