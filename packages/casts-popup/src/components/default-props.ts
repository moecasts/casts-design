import { PopupProps } from './types';

const DEFAULT_PLACEMENT = 'top';
const DEFAULT_NESTED_PLACEMENT = 'right-start';

export const defaultPopupProps = {
  placement: DEFAULT_PLACEMENT,
  nestedPlacement: DEFAULT_NESTED_PLACEMENT,
  theme: 'default',
} satisfies Partial<PopupProps>;
