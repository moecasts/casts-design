import {
  CSSProperties,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  PointerEventHandler,
  ReactNode,
} from 'react';
import {
  BaseComponentProps,
  ChangeEventHandler,
  GetPrefixCls,
  Size,
} from '@casts/common';

type InputValue = string | number | undefined;

export type RangeInputValue = InputValue[];

export type RangeInputSize = Size;

export type RangeInputShape = 'circle' | 'square' | 'round';

export type RangeInputStatus = 'error' | 'warning' | 'success';

export type UseRangeInputProps = BaseComponentProps & {
  clearable?: boolean;
  onPointerDown?: PointerEventHandler<HTMLInputElement>;
  onPointerLeave?: PointerEventHandler<HTMLInputElement>;
  autoWidth?: boolean;
  className?: string;
  disabled?: boolean;
  maxLength?: number | [number, number];
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<RangeInputValue>;
  onCompositionEnd?: ChangeEventHandler<RangeInputValue>;
  onCompositionStart?: ChangeEventHandler<RangeInputValue>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  placeholder?: string | [string, string];
  prefix?: ReactNode;
  shape?: RangeInputShape;
  size?: RangeInputSize;
  status?: RangeInputStatus;
  style?: CSSProperties;
  suffix?: ReactNode;
  tips?: ReactNode;
  defaultValue?: RangeInputValue;
  value?: RangeInputValue;
  getPrefixCls?: GetPrefixCls;
  bordered?: boolean;
};

export type RangeInputProps = UseRangeInputProps;
