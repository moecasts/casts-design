import { useConfig } from '@casts/config-provider';
import { forwardRef } from 'react';
import { defaultProps } from './default-props';
import { useBadge } from './hooks';
import { BadgeProps } from './types';
import './styles/badge.scss';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
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
});

Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
