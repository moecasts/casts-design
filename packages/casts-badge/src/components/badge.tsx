import { useConfig } from '@casts/config-provider';
import { ForwardedRef, forwardRef } from 'react';
import { defaultBadgeProps } from './default-props';
import { useBadge } from './hooks';
import { BadgeProps } from './types';
import './styles/badge.scss';

export const Badge = forwardRef(
  (props: BadgeProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const { children } = props;
    const { getPrefixCls } = useConfig();
    const { classes, styles, getBadge } = useBadge({
      ...props,
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
Badge.defaultProps = defaultBadgeProps;
