import { Children, FC, forwardRef, useImperativeHandle, useRef } from 'react';
import { AvatarProps } from './types';
import { useConfig } from '@casts/config-provider';
import { useAvatar } from './hooks';
import { defaultProps } from './default-props';
import './styles/avatar.scss';

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const { getPrefixCls } = useConfig();
  const { src, size, shape, icon, children, style } = props;

  const avatarNodeRef = useRef<HTMLSpanElement>(null);
  useImperativeHandle(ref, () => avatarNodeRef.current as HTMLSpanElement, []);
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
});

Avatar.displayName = 'Avatar';

Avatar.defaultProps = defaultProps;
