import { useConfig } from '@casts/config-provider';
import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react';
import { defaultProps } from './default-props';
import { useAvatar } from './hooks';
import './styles/avatar.scss';
import { AvatarProps } from './types';

export const Avatar = forwardRef(
  (props: AvatarProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const { getPrefixCls } = useConfig();
    const { src, size, shape, icon, children, style } = props;

    const avatarNodeRef = useRef<HTMLSpanElement>(null);
    useImperativeHandle(
      ref,
      () => avatarNodeRef.current as HTMLSpanElement,
      [],
    );
    const { classes, styles, getRenderChildren } = useAvatar({
      size,
      style,
      src,
      icon,
      getPrefixCls,
      shape,
      children,
      avatarNodeRef,
    });

    return (
      <span className={classes} style={styles} ref={avatarNodeRef}>
        {getRenderChildren()}
      </span>
    );
  },
);

Avatar.displayName = 'Avatar';

Avatar.defaultProps = defaultProps;
