import { ReactNode } from 'react';

import { UseAvatarGroupProps, UseAvatarProps } from '../hooks';

export type AvatarProps = Omit<UseAvatarProps, 'getPrefixCls'> & {
  /**
   * Content
   */
  children?: ReactNode;
};

export type AvatarGroupProps = Omit<UseAvatarGroupProps, 'getPrefixCls'> & {
  /**
   * Content
   */
  children?: ReactNode;
};
