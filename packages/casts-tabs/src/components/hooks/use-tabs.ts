import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseTabProps } from '../types';

export const useTabs = (props: UseTabProps) => {
  const { className, style, size = 'large' } = props;
  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('tabs');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${size}`]: size,
  });

  const styles: CSSProperties = {
    ...style,
  };

  return {
    classes,
    styles,
  };
};
