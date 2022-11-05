import { GetPrefixCls } from '@casts/config-provider';
import { ReactNode } from 'react';
import { AvatarSize, UseAvatarGroupProps, UseAvatarProps } from '../hooks';

export type AvatarProps = Omit<UseAvatarProps, 'getPrefixCls'> & {
  children?: ReactNode;
};

export type AvatarGroupProps = Omit<UseAvatarGroupProps, 'getPrefixCls'> & {
  children?: ReactNode;
};
