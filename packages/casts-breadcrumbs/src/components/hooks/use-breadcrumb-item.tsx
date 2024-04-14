import { CSSProperties } from 'react';
import { useConfig, useLink } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseBreadcrumbItemProps } from '../types';

export const useBreadcrumbItem = (props: UseBreadcrumbItemProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('breadcrumb-item');

  const { handleLinkClick } = useLink(props);

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = {
    ...style,
  };

  const linkClasses = clsx(`${prefixCls}-link`);
  const iconClasses = clsx(`${prefixCls}-icon`);
  const contentClasses = clsx(`${prefixCls}-content`);

  return {
    classes,
    styles,
    linkClasses,
    contentClasses,
    iconClasses,
    handleLinkClick,
    ...rest,
  };
};
