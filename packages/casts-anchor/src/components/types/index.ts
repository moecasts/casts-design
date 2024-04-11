import { ReactNode } from 'react';
import { BaseComponentProps, Direction } from '@casts/common';

export type AnchorContextValue = {
  activeLink?: string;
  setCurrentActiveLink?: (link: string) => void;

  addLink: (link: string) => void;
  removeLink: (link: string) => void;
};

export type AnchorProviderProps = BaseComponentProps;

export type AnchorLinkProps = BaseComponentProps & {
  title: ReactNode;
  href?: string;
  active?: boolean;
};

export type UseAnchorProps = BaseComponentProps & {
  direction?: Direction;
  items?: Partial<AnchorLinkProps>[];
};

export type AnchorProps = UseAnchorProps;
