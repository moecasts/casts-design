import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react';
import { useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';

import { defaultAvatarProps } from './default-props';
import { useAvatar } from './hooks';
import { AvatarProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/avatar.scss';

export const Avatar = forwardRef(
  (props: AvatarProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const { getPrefixCls } = useConfig();
    const { src, size, shape, icon, children, style } = useDefaultProps(
      props,
      defaultAvatarProps,
    );

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
