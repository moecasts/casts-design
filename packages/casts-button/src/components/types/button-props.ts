import { Size } from '@casts/common';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

export type ButtonShape = 'square' | 'round' | 'pill';

export type ButtonVariant =
  | 'contained'
  | 'outline'
  | 'dashed'
  | 'text'
  | 'link'
  | 'ghost';

export type ButtonBlock = boolean;

export type ButtonTheme =
  | 'brand'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'disabled'
  | 'neutral';
// | 'black'
// | 'white';

export type ButtonSize = Size;

export type BaseButtonProps = {
  icon?: ReactNode;
  /**
   * @default round
   */
  shape?: ButtonShape;
  /**
   * @default contained
   */
  variant?: ButtonVariant;
  /**
   * @default brand
   */
  theme?: ButtonTheme;
  /**
   * pastel theme(only works when variant is contained)
   * @default false
   */
  pastel?: boolean;
  /**
   * @default default
   */
  size?: ButtonSize;
  /**
   * @default false
   */
  block?: boolean;
  /**
   * @default false
   */
  loading?: boolean;
  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * border visible?
   * only works when pastel is true
   * @default false
   */
  bordered?: boolean;
};

export type NativeButtonProps = {
  htmlType?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps;
export type AnchorButtonProps = {
  href: string;
  target?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButtonProps;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
