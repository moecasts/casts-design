import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseLinkProps } from '../types';

export const useLink = (props: UseLinkProps) => {
  const { style, className, theme, size, underline, ...rest } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('link');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${theme}`]: theme,
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--underline`]: underline,
    [`${prefixCls}--underline-hover`]: underline === 'hover',
  });
  const styles: CSSProperties = { ...style };

  return {
    classes,
    styles,
    ...rest,
  };
};
