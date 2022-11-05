import { useConfig } from '@casts/config-provider';
import { forwardRef } from 'react';
import { AvatarGroupProvider, useAvatarGroup } from './hooks/use-avatar-group';
import { AvatarGroupProps } from './types';
import './styles/avatar-group.scss';

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
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
