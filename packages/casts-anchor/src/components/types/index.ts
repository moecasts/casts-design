import { ReactNode } from 'react';
import { BaseComponentProps, Direction } from '@casts/common';

export type AnchorContextValue = {
  /**
   * The currently active link in the anchor.
   */
  activeLink?: string;
  /**
   * A function to set the currently active link in the anchor.
   */
  setCurrentActiveLink?: (link: string) => void;

  /**
   * A function to add a link to the anchor.
   */
  addLink: (link: string) => void;
  /**
   * A function to remove a link from the anchor.
   */
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
  /**
   * The title of the anchor link.
   */
  title: ReactNode;
  /**
   * The href attribute of the anchor link.
   */
  href?: string;
  /**
   * Whether the anchor link is active.
   */
  active?: boolean;
};

export type UseAnchorProps = BaseComponentProps & {
  /**
   * The direction of the anchor.
   */
  direction?: Direction;
  /**
   * The items (links) in the anchor.
   */
  items?: Partial<AnchorLinkProps>[];
  /**
   * The offset of the scroll position to trigger the active link change.
   */
  scrollOffsetY?: number;
};

export type AnchorProps = UseAnchorProps;
