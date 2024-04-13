import { ReactNode } from 'react';
import { BaseComponentProps, Direction } from '@casts/common';

export type AnchorContextValue = {
  activeLink?: string;
  setCurrentActiveLink?: (link: string) => void;

  addLink: (link: string) => void;
  removeLink: (link: string) => void;
};

export type UseAnchorProviderProps = {
  /**
   * The offset of the scroll position to trigger the active link change.
   */
  scrollOffsetY?: number;
};

export type AnchorProviderProps = BaseComponentProps & UseAnchorProviderProps;

export type AnchorLinkProps = BaseComponentProps & {
  title: ReactNode;
  href?: string;
  active?: boolean;
};

export type UseAnchorProps = BaseComponentProps & {
  direction?: Direction;
  items?: Partial<AnchorLinkProps>[];
  /**
   * The offset of the scroll position to trigger the active link change.
   */
  scrollOffsetY?: number;
};

export type AnchorProps = UseAnchorProps;
