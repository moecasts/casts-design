import { Children, CSSProperties, FC } from 'react';
import { useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { defaultSpaceProps } from './default-props';
import { SpaceProps } from './types';
import {
  getAlignItemsBySpaceAlign,
  getFlexDirectionBySpaceDirection,
  getGap,
} from './utils';

export const Space: FC<SpaceProps> = (props) => {
  const propsWithDefault = useDefaultProps(props, defaultSpaceProps);
  const { className, children, wrap, size, align, style, direction, ...rest } =
    propsWithDefault;
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
