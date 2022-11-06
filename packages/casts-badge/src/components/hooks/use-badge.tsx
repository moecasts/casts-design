import { BaseComponentProps, WithRequired } from '@casts/common';
import clsx from 'clsx';
import { cloneElement, CSSProperties, isValidElement, ReactNode } from 'react';
import { formatSizeUnit } from '@casts/hooks';

export enum BadgePosition {
  LEFT_TOP = 'left-top',
  LEFT_BOTTOM = 'left-bottom',
  RIGHT_TOP = 'right-top',
  RIGHT_BOTTOM = 'right-bottom',
}

export type UseBadgeProps = WithRequired<BaseComponentProps, 'getPrefixCls'> & {
  dot?: boolean;
  count?: ReactNode;
  /* dumi is not support [number, number], so use number[] */
  position?: `${BadgePosition}` | number[];

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
    position,
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
    [`${prefixCls}--${position}`]:
      position &&
      Object.values(BadgePosition).includes(position as BadgePosition),
    [`${prefixCls}--standalone`]: isStandalone,
  });

  const styles: CSSProperties = { ...style };

  const badgePrefixCls = `${prefixCls}-count`;
  const badgeClasses = clsx(badgePrefixCls);

  const [positionRight, positionTop] = Array.isArray(position) ? position : [];
  const offsetStyles: CSSProperties = !(positionRight || positionTop)
    ? {}
    : {
        right: formatSizeUnit(positionRight),
        top: formatSizeUnit(positionTop),
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
