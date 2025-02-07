import {
  CSSProperties,
  FocusEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  PointerEventHandler,
  ReactNode,
} from 'react';
import { GetPrefixCls, Size } from '@casts/common';

import { ChangeEventHandler } from './event';

export type InputSize = Size;

export type InputShape = 'circle' | 'square' | 'round';

export type InputStatus = 'error' | 'warning' | 'success';

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'onChange' | 'onCompositionEnd' | 'onCompositionStart' | 'prefix'
> & {
  clearable?: boolean;
  onPointerDown?: PointerEventHandler<HTMLInputElement>;
  onPointerLeave?: PointerEventHandler<HTMLInputElement>;
  autoWidth?: boolean;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler;
  onCompositionEnd?: ChangeEventHandler;
  onCompositionStart?: ChangeEventHandler;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  placeholder?: string;
  prefix?: ReactNode;
  shape?: InputShape;
  size?: InputSize;
  status?: InputStatus;
  style?: CSSProperties;
  suffix?: ReactNode;
  tips?: ReactNode;
  defaultValue?: string;
  value?: string;
  bordered?: boolean;
  getPrefixCls?: GetPrefixCls;
};
