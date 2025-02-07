import { Placement } from '@casts/common';

import { PopupProps } from './types';

export const DEFAULT_PLACEMENT: Placement = 'top';
export const DEFAULT_NESTED_PLACEMENT: Placement = 'right-start';

export const defaultPopupProps = {
  // placement: DEFAULT_PLACEMENT,
  // nestedPlacement: DEFAULT_NESTED_PLACEMENT,
  theme: 'default',
} satisfies Partial<PopupProps>;
