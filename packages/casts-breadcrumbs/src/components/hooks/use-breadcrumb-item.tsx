import { CSSProperties, useEffect, useRef, useState } from 'react';
import { formatSizeUnit } from '@casts/common';
import { useConfig, useLink } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseBreadcrumbItemProps } from '../types';
import { useBreadcrumbsContext } from './use-breadcrumbs-context';

export const useBreadcrumbItem = (props: UseBreadcrumbItemProps) => {
  const { className, style, maxItemWidth: propMaxItemWidth, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('breadcrumb-item');

  const { handleLinkClick } = useLink(props);

  const breadcrumbItemRef = useRef<HTMLLIElement>(null);

  const { maxItemWidth: parentMaxItemWidth } = useBreadcrumbsContext();

  const maxItemWidth = propMaxItemWidth || parentMaxItemWidth;

  const [isOverflow, setIsOverflow] = useState(false);

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--overflow`]: isOverflow,
  });
  const styles: CSSProperties = {
    maxWidth: isOverflow && maxItemWidth && formatSizeUnit(maxItemWidth),
    ...style,
  };

  const linkClasses = clsx(`${prefixCls}-link`);
  const iconClasses = clsx(`${prefixCls}-icon`);
  const contentClasses = clsx(`${prefixCls}-content`);

  useEffect(() => {
    const isOverflow =
      breadcrumbItemRef.current?.offsetWidth &&
      maxItemWidth &&
      breadcrumbItemRef.current.offsetWidth > parseInt(String(maxItemWidth));
    setIsOverflow(!!isOverflow);
  }, [breadcrumbItemRef]);

  return {
    classes,
    styles,
    linkClasses,
    contentClasses,
    iconClasses,
    handleLinkClick,
    breadcrumbItemRef,
    isOverflow,
    ...rest,
  };
};

export type UseBreadcrumbItemReturn = ReturnType<typeof useBreadcrumbItem>;
