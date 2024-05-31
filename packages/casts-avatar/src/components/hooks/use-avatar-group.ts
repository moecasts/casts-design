import { createContext, CSSProperties } from 'react';
import { GetPrefixCls } from '@casts/common';
import clsx from 'clsx';

import { AvatarGroupProps } from '../types';
import { AvatarSize } from './use-avatar';

export type UseAvatarGroupProps = {
  /**
   * getPrefixCls is a function that returns a prefix class based on the component name and a customize prefix.
   */
  getPrefixCls: GetPrefixCls;
  /**
   * shape is an optional property that determines the shape of the avatar group. It can be 'circle', 'round', or 'square'.
   */
  shape?: 'circle' | 'round' | 'square';
  /**
   * size is an optional property that determines the size of the avatar group. It can be a specific size value or a predefined size string.
   */
  size?: AvatarSize;
  /**
   * className is an optional property that allows you to add custom class names to the avatar group.
   */
  className?: string;
  /**
   * style is an optional property that allows you to add custom inline styles to the avatar group.
   */
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
