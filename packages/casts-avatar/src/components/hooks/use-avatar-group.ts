import { GetPrefixCls } from '@casts/config-provider';
import { createContext, CSSProperties } from 'react';
import { AvatarGroupProps } from '../types';
import { AvatarSize } from './use-avatar';
import clsx from 'clsx';

export type UseAvatarGroupProps = {
  getPrefixCls: GetPrefixCls;
  shape?: 'circle' | 'round' | 'square';
  size?: AvatarSize;
  className?: string;
  style?: CSSProperties;
};

export const AvatarGroupContext = createContext<AvatarGroupProps>({});

export const AvatarGroupProvider = AvatarGroupContext.Provider;

export const useAvatarGroup = (props: UseAvatarGroupProps) => {
  const { getPrefixCls, style, className } = props;
  const prefixCls = getPrefixCls('avatar-group');
  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = {
    ...style,
  };

  return {
    classes,
    styles,
  };
};
