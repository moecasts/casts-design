import { BaseComponentProps, Size } from '@casts/common';
import { InputProps } from '@casts/input';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SelectValue = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SelectOption = Record<string, any>;

export type SelectVirtual = {
  /**
   * enable virtual scroll when options length is greater than threshold
   * @default 100
   */
  threshold?: number;
};

export type SelectSize = Size;

export type UseSelectProps = BaseComponentProps & {
  placeholder?: string;

  value?: SelectValue;

  defaultValue?: SelectValue;

  onChange?: (value: SelectValue) => void;

  options?: SelectOption[];

  /**
   * width of the select content
   * @default same as the trigger
   */
  width?: number | string;

  /**
   * controlled select dropdown visible
   */
  open?: boolean;

  /**
   * uncontrolled select dropdown visible
   */
  defaultOpen?: boolean;

  /**
   * open change event
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * outside click event
   */
  onOutsideClick?: (open: boolean, context?: { e?: Event }) => void;

  /**
   * multiple select
   */
  multiple?: boolean;

  /**
   * enable virtual scroll
   * when `virtual = true`, it will transform to `virtual = { threshold: 100 }`
   * @default true
   */
  virtual?: boolean | SelectVirtual;

  size?: SelectSize;
};

export type SelectProps = UseSelectProps & {
  showFlipArrow?: boolean;

  inputProps?: Partial<InputProps>;
};
