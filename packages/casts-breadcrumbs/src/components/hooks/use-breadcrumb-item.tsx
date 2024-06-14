import { CSSProperties, useCallback, useRef, useState } from 'react';
import { formatSizeUnit } from '@casts/common';
import { useConfig, useLink } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseBreadcrumbItemProps } from '../types';
import { useBreadcrumbsContext } from './use-breadcrumbs-context';

export const useBreadcrumbItem = (props: UseBreadcrumbItemProps) => {
  const {
    className,
    style,
    maxItemWidth: propMaxItemWidth,
    separator: propSeparator,
    tooltipProps: propTooltipProps,
    ...rest
  } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('breadcrumb-item');

  const { handleLinkClick } = useLink(props);

  const breadcrumbItemRef = useRef<HTMLLIElement | null>(null);

  const {
    maxItemWidth: parentMaxItemWidth,
    separator: parentSeparator,
    tooltipProps: parentTooltipProps,
  } = useBreadcrumbsContext();

  const maxItemWidth = propMaxItemWidth || parentMaxItemWidth;

  const [isOverflow, setIsOverflow] = useState(false);

  const separator = propSeparator || parentSeparator;

  const tooltipProps = propTooltipProps || parentTooltipProps;

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--overflow`]: isOverflow,
  });
  const styles: CSSProperties = {
    maxWidth:
      (isOverflow && maxItemWidth && formatSizeUnit(maxItemWidth)) || undefined,
    ...style,
  };

  const linkClasses = clsx(`${prefixCls}-link`);
  const iconClasses = clsx(`${prefixCls}-icon`);
  const contentClasses = clsx(`${prefixCls}-content`);

  const setBreadcrumbItemRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (node === breadcrumbItemRef.current) {
        return;
      }

      breadcrumbItemRef.current = node;

      if (breadcrumbItemRef.current !== null) {
        const isOverflow =
          breadcrumbItemRef.current?.offsetWidth &&
          maxItemWidth &&
          breadcrumbItemRef.current.offsetWidth >
            parseInt(String(maxItemWidth));
        setIsOverflow(!!isOverflow);
      }
    },
    [maxItemWidth],
  );

  return {
    ...rest,
    classes,
    styles,
    linkClasses,
    contentClasses,
    iconClasses,
    handleLinkClick,
    isOverflow,
    separator,
    tooltipProps,
    breadcrumbItemRef,
    setBreadcrumbItemRef,
  };
};

export type UseBreadcrumbItemReturn = ReturnType<typeof useBreadcrumbItem>;
