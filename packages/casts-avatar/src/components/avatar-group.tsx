import { useConfig } from '@casts/config-provider';
import { ForwardedRef, forwardRef } from 'react';
import { AvatarGroupProvider, useAvatarGroup } from './hooks/use-avatar-group';
import { AvatarGroupProps } from './types';
import './styles/avatar-group.scss';

export const AvatarGroup = forwardRef(
  (props: AvatarGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, style, className } = props;
    const { getPrefixCls } = useConfig();
    const { classes, styles } = useAvatarGroup({
      getPrefixCls,
      style,
      className,
    });

    return (
      <AvatarGroupProvider value={props}>
        <div className={classes} style={styles} ref={ref}>
          {children}
        </div>
      </AvatarGroupProvider>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';
