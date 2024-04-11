import { BaseComponentProps } from '@casts/common';

export type UseAffixProps = BaseComponentProps & {
  offsetTop?: number;
  offsetBottom?: number;
  container?: string | (() => HTMLElement | null);
};

export type AffixProps = UseAffixProps;
