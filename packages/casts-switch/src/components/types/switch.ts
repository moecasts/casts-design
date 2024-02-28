import { ReactNode } from 'react';
import { BaseComponentProps, Size } from '@casts/common';

export type SwitchSize = Size;

export type SwitchShape = 'pill' | 'round';

export type UseSwitchProps = Omit<BaseComponentProps, 'children'> & {
  /**
   * The size of the switch
   * @default medium
   */
  size?: SwitchSize;

  /**
   * The shape of the switch
   * @default pill
   */
  shape?: SwitchShape;

  /**
   * Determine whether the switch is checked
   */
  checked?: boolean;

  /**
   * Whether to set the initial state
   */
  defaultChecked?: boolean;

  /**
   * Loading state of switch
   */
  loading?: boolean;

  /**
   * Whether to disable the switch
   */
  disabled?: boolean;

  /**
   * Trigger when the checked state is changing
   */
  onChange?: (checked: boolean) => void;

  /**
   * label of switch
   */
  label?: string;

  /**
   * The icon to be displayed when the switch is checked.
   */
  checkedIcon?: ReactNode;

  /**
   * The icon to be displayed when the switch is unchecked.
   */
  uncheckedIcon?: ReactNode;

  /**
   * The content to be displayed at the start of the switch.
   */
  startContent?: ReactNode;

  /**
   * The content to be displayed at the end of the switch.
   */
  endContent?: ReactNode;
};

export type SwitchProps = UseSwitchProps;
