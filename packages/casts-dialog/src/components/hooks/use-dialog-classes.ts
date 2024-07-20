import clsx from 'clsx';

import { UseDialogClassesProps } from '../types';

export const useDialogClasses = (props: UseDialogClassesProps) => {
  const { getPrefixCls, centered, maskClassName, maskStyle } = props;
  const prefixCls = getPrefixCls('dialog');

  const containerClasses = clsx(`${prefixCls}-container`, {
    [`${prefixCls}-container--center`]: centered,
  });
  const maskClasses = clsx(`${prefixCls}-mask`, maskClassName);

  const expandClasses = getPrefixCls('expand');

  return {
    containerClasses,
    maskClasses,
    expandClasses,
    maskStyle,
  };
};
