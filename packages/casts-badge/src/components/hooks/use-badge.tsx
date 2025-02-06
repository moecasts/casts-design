import { cloneElement, CSSProperties, isValidElement, ReactNode } from 'react';
import {
  BaseComponentProps,
  formatSizeUnit,
  isUndefined,
  WithRequired,
} from '@casts/common';
import clsx from 'clsx';

export enum BadgePlacement {
  LEFT_TOP = 'left-top',
  LEFT_BOTTOM = 'left-bottom',
  RIGHT_TOP = 'right-top',
  RIGHT_BOTTOM = 'right-bottom',
}

export type UseBadgeProps = WithRequired<BaseComponentProps, 'getPrefixCls'> & {
  dot?: boolean;
  count?: ReactNode;
  /* dumi is not support [number, number], so use number[] */
  placement?: `${BadgePlacement}` | number[];

  color?: CSSProperties['color'];

  /**
   * ${overflowCount}+ is displayed when count is larger than overflowCount.
   */
  overflowCount?: number;

  /**
   * only work when badge is standalone
   */
  text?: ReactNode;
};

export const useBadge = (props: UseBadgeProps) => {
  const {
    getPrefixCls,
    dot,
    count,
    placement,
    className,
    style,
    children,
    color,
    overflowCount,
    text,
  } = props;

  const prefixCls = getPrefixCls('badge');
  const isStandalone = !children;

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--dot`]: dot,
    [`${prefixCls}--${placement}`]:
      placement &&
      Object.values(BadgePlacement).includes(placement as BadgePlacement),
    [`${prefixCls}--standalone`]: isStandalone,
  });

  const styles: CSSProperties = { ...style };

  const badgePrefixCls = `${prefixCls}-count`;
  const badgeClasses = clsx(badgePrefixCls);

  const [placementRight, placementTop] = Array.isArray(placement)
    ? placement
    : [];
  const offsetStyles: CSSProperties =
    isUndefined(placementRight) || isUndefined(placementTop)
      ? {}
      : {
          right: formatSizeUnit(placementRight),
          top: formatSizeUnit(placementTop),
        };

  const badgeStyles: CSSProperties = {
    ...offsetStyles,
    backgroundColor: color,
  };

  const getBadgeNode = () => {
    if (dot) {
      return <sup style={offsetStyles} className={`${prefixCls}-dot`}></sup>;
    }

    if (isValidElement(count)) {
      return (
        <sup style={offsetStyles} className={`${prefixCls}-custom-component`}>
          {count}
        </sup>
      );
    }

    if (!count) {
      return null;
    }

    const showCount =
      overflowCount && overflowCount < Number(count)
        ? `${overflowCount}+`
        : count;

    return (
      <sup style={offsetStyles} className={badgeClasses}>
        {showCount}
      </sup>
    );
  };

  const getBadgeText = () => {
    return <span className={`${prefixCls}-text`}>{text}</span>;
  };

  const getBadge = () => {
    const badgeNode = getBadgeNode();

    if (!badgeNode) {
      return null;
    }

    return (
      <>
        {cloneElement(badgeNode, {
          style: badgeStyles,
        })}
        {isStandalone && text && getBadgeText()}
      </>
    );
  };

  return {
    classes,
    styles,
    getBadge,
  };
};
