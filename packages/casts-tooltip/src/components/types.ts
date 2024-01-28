import { PopupProps, PopupTheme, PopupTrigger } from '@casts/popup';

export type TooltipTheme = PopupTheme;
export type TooltipTrigger = PopupTrigger;
export type TooltipShape = 'square' | 'round' | 'circle';

export type TooltipProps = Omit<PopupProps, 'trigger' | 'theme'> & {
  trigger?: TooltipTrigger;
  theme?: TooltipTheme;
  shape?: TooltipShape;
};
