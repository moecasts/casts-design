import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseBreadcrumbsProps } from '../types';

export const useBreadcrumbs = (props: UseBreadcrumbsProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('breadcrumbs');

  const collapsePrefixCls = getPrefixCls('breadcrumb-collapse');

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = {
    ...style,
  };

  const collapseClasses = collapsePrefixCls;

  return {
    ...rest,
    classes,
    styles,
    collapseClasses,
  };
};
