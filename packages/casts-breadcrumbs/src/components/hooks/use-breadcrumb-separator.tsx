import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseBreadcrumbSeparatorProps } from '../types';

export const useBreadcrumbSeparator = (props: UseBreadcrumbSeparatorProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('breadcrumb-separator');

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = {
    ...style,
  };

  return {
    ...rest,
    classes,
    styles,
  };
};
