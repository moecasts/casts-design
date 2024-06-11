import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { UseMenuProps } from '../types';

export const useMenu = (props: UseMenuProps) => {
  const { size, width, className, style, collapse } = props;

  /* --------------------------------- classes ---------------------------------------- */
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('menu');

  const classes = clsx(`${prefixCls}`, className, {
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--collapse`]: collapse,
  });
  const styles: CSSProperties = {
    width: collapse ? '' : width,
    ...style,
  };

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
