import { ForwardedRef, forwardRef } from 'react';
import { useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';

import { defaultBadgeProps } from './default-props';
import { useBadge } from './hooks';
import { BadgeProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/badge.scss';

export const Badge = forwardRef(
  (props: BadgeProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultBadgeProps);
    const { children } = propsWithDefault;
    const { getPrefixCls } = useConfig();
    const { classes, styles, getBadge } = useBadge({
      ...propsWithDefault,
      getPrefixCls,
    });

    return (
      <span className={classes} style={styles} ref={ref}>
        {children}
        {getBadge()}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
