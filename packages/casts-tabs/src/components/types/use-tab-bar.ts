import { RefObject } from 'react';
import { BaseComponentProps } from '@casts/common';

export type UseTabsBarProps = BaseComponentProps & {
  items: any;
  /** active scroll offset */
  offset?: number;
  barContainerRef: RefObject<HTMLElement>;
  barScrollRef: RefObject<
    | {
        scrollTo: (x: number, y: number) => void;
      }
    | undefined
  >;
  itemsRef: RefObject<Array<HTMLButtonElement | null>>;
};
