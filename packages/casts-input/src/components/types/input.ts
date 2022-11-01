import { ChangeEventHandler } from './event';

import {
  CSSProperties,
  ReactNode,
  FocusEventHandler,
  PointerEventHandler,
} from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export type InputShape = 'circle' | 'square' | 'round';

export type InputStatus = 'error' | 'warning' | 'success';

export type InputProps = {
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
};
