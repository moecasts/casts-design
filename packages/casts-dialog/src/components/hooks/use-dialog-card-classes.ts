import clsx from 'clsx';

import { UseDialogCardClassesProps } from '../types';

export const useDialogCardClasses = (props: UseDialogCardClassesProps) => {
  const { getPrefixCls, dialogClassName, simple, dialogStyle } = props;
  const prefixCls = getPrefixCls('dialog');

  const dialogClasses = clsx(prefixCls, dialogClassName, {
    [`${prefixCls}--simple`]: simple,
  });
  const headerClasses = `${prefixCls}-header`;
  const bodyClasses = `${prefixCls}-body`;
  const footerClasses = `${prefixCls}-footer`;
  const closeClasses = `${prefixCls}-close`;

  return {
    dialogClasses,
    headerClasses,
    bodyClasses,
    footerClasses,
    closeClasses,
    dialogStyle,
  };
};
