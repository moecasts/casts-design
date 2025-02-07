import { CSSProperties, ReactNode, RefObject } from 'react';
import { BaseComponentProps } from '@casts/common';
import { Placement, UseFloatingReturn } from '@floating-ui/react';

export type PopupTheme = 'default' | 'anti';

export type PopupTrigger = 'hover' | 'click' | 'focus' | 'manual';

export type UsePopupProps = {
  /**
   * custom class name
   */
  className?: string;
  /**
   * custom styles
   */
  style?: CSSProperties;
  /**
   * trigger node
   */
  children: ReactNode;
  /**
   * popup controlled visible
   */
  visible?: boolean;
  /**
   * popup visible
   */
  defaultVisible?: boolean;
  /**
   * content node
   */
  content: ReactNode;
  /**
   * placement
   */
  placement?: Placement;
  /**
   * placement of nested popup
   */
  nestedPlacement?: Placement;
  /**
   * fade animation duration
   */
  animationDuration?: number;
  /**
   * trigger type
   */
  trigger?: PopupTrigger;
  /**
   * shadow style
   */
  shadow?: boolean;
  /**
   * disabled trigger event
   */
  disabled?: boolean;
  /**
   * is show arrow
   * @default true
   */
  showArrow?: boolean;
  /**
   * arrow size
   * @default 8
   */
  arrowSize?: number;
  /**
   * theme
   * @default light
   */
  theme?: PopupTheme;
  /**
   * attach node
   * @default document.body
   */
  attach?: string | HTMLElement | RefObject<HTMLElement>;
  /**
   * visible time(ms). 0 or undefined is always visible,
   * only works when trigger is 'click'.
   */
  duration?: number;
  /**
   * delay time(ms)
   */
  delay?: number;
  /**
   * popup offset(px)
   * @default 4
   */
  overlayOffset?: number;
  /**
   * visible change event
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * disabled auto placement when popup is overflowing
   * @default false
   */
  disabledAutoPlacement?: boolean;
  /**
   * wether popup is nestable
   */
  nestable?: boolean;
};

export type PopupProps = BaseComponentProps & UsePopupProps;
export type PopupRef = {
  getFloating: () => UseFloatingReturn;
  getPopupElement: () => HTMLElement | null;
  getPortalElement: () => HTMLElement | null;
  getTriggerElement: () => HTMLElement | null;
  setVisible: (visible: boolean) => void;
};
