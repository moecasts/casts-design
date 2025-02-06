import { BaseComponentProps, Size } from '@casts/common';

import { ChangeContext, DateValue } from './common';

export enum DatePickerMode {
  Single = 'single',
  Multiple = 'multiple',
  Range = 'range',
}

export type DatePickerValue = string | string[];

export type BaseDatePickerProps = BaseComponentProps & {
  /**
   * size of the input
   */
  size?: Size;
  /**
   * popup controlled visible
   */
  visible?: boolean;
  /**
   * popup visible
   */
  defaultVisible?: boolean;

  /**
   * visible change event
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * input placeholder
   */
  placeholder?: string;
};

export type UseDatePickerProps = BaseDatePickerProps & {
  mode?: `${DatePickerMode}`;

  value?: DateValue;

  defaultValue?: DateValue;

  onChange?: (value: DateValue, context: ChangeContext) => void;
};

export type DatePickerProps = UseDatePickerProps;
