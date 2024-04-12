import { CSSProperties } from 'react';
import clsx from 'clsx';

import { UseDividerProps } from '../types/use-divider-props';

export const useDivider = (props: UseDividerProps) => {
  const { getPrefixCls, layout, align, children, className, style } = props;

  const prefixCls = getPrefixCls('divider');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${layout}`]: layout,
    [`${prefixCls}--with-content`]: children,
    [`${prefixCls}--align-${align}`]: children && align,
  });

  const contentClasses = `${prefixCls}-content`;
  const styles: CSSProperties = { ...style };

  const getContent = () =>
    children && <div className={contentClasses}>{children}</div>;

  return {
    classes,
    styles,
    getContent,
  };
};
