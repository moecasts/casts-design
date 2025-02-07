import { BaseComponentProps } from '@casts/common';

export type UseAffixProps = BaseComponentProps & {
  /**
   * The offset from the top of the viewport (in pixels) before the element becomes fixed.
   */
  offsetTop?: number;
  /**
   * The offset from the bottom of the viewport (in pixels) before the element becomes fixed.
   */
  offsetBottom?: number;
  /**
   * The container (either a CSS selector string or a function that returns an HTMLElement or null)
   * that the affixed element will be positioned relative to.
   */
  container?: string | (() => HTMLElement | null);
};

export type AffixProps = UseAffixProps;
