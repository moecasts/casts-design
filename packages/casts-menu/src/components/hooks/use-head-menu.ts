import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { UseHeadMenuProps } from '../types';

export const useHeadMenu = (props: UseHeadMenuProps) => {
  const { size, className, style } = props;

  /* --------------------------------- classes ---------------------------------------- */
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('head-menu');

  const classes = clsx(`${prefixCls}`, className, {
    [`${prefixCls}--${size}`]: size,
  });
  const styles: CSSProperties = { ...style };
  const logoClasses = `${prefixCls}-logo`;

  const contentClasses = `${prefixCls}-content`;
  const operationsClasses = `${prefixCls}-operations`;

  return {
    classes,
    styles,

    logoClasses,
    contentClasses,
    operationsClasses,
  };
};
