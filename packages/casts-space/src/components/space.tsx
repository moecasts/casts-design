import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import { Children } from 'react';
import { FC } from 'react';
import { defaultSpaceProps } from './default-props';
import {
  SpaceAlign,
  SpaceDirection,
  SpaceProps,
  SpaceSize,
  SpaceSizeEnum,
} from './types';

export const getGapBySizeEnum = (size: SpaceSize): string => {
  if (size === SpaceSizeEnum.SMALL) {
    return '8px';
  }

  if (size === SpaceSizeEnum.LARGE) {
    return '40px';
  }

  return '16px';
};

export const getFlexDirectionBySpaceDirection = (
  direction?: `${SpaceDirection}`,
): CSSProperties['flexDirection'] => {
  if (direction === SpaceDirection.VERTICAL) {
    return 'column';
  }

  if (direction === SpaceDirection.HORIZONTAL) {
    return 'row';
  }

  return 'initial';
};

export const getAlignItemsBySpaceAlign = (align?: `${SpaceAlign}`) => {
  if (align === SpaceAlign.START || align === SpaceAlign.END) {
    return `flex-${align}`;
  }

  return align;
};

export const getGap = (size?: SpaceSize) => {
  const formatSize = (size: SpaceSize) => {
    if (Number.isInteger(size)) {
      return `${size}px`;
    }

    return size as string;
  };

  if (!size && size !== 0) {
    return defaultSpaceProps.size as string;
  }

  if (Array.isArray(size)) {
    return size.map((item) => formatSize(item)).join(' ');
  }

  return formatSize(size);
};

export const Space: FC<SpaceProps> = (props) => {
  const { className, children, wrap, size, align, style, direction, ...rest } =
    props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('space');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--wrap`]: wrap,
  });

  const gap = getGap(size);

  const styles: CSSProperties = {
    gap,
    flexDirection: getFlexDirectionBySpaceDirection(direction),
    alignItems: getAlignItemsBySpaceAlign(align),
    ...style,
  };

  return (
    <div className={classes} style={styles} {...rest}>
      {Children.map(children, (child) => child)}
    </div>
  );
};

Space.defaultProps = defaultSpaceProps;
