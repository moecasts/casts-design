import { BaseComponentProps, Size } from '@casts/common';

import { ChangeContext, DateRange, DateValue } from './common';

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

export type UseDateRangePickerProps = BaseDatePickerProps & {
  value?: DateRange;

  defaultValue?: DateRange;

  onChange?: (value: DateRange, context: ChangeContext) => void;
};

export type DateRangePickerProps = UseDateRangePickerProps;

export type UseDateTimePickerProps = BaseDatePickerProps & {
  value?: DateValue;

  defaultValue?: DateValue;

  onChange?: (value: DateValue, context: ChangeContext) => void;
};

export type DateTimePickerProps = UseDateTimePickerProps;

export type UseDateTimeRangePickerProps = BaseDatePickerProps & {
  value?: DateRange;

  defaultValue?: DateRange;

  onChange?: (value: DateRange, context: ChangeContext) => void;
};

export type DateTiemRangePickerProps = UseDateTimeRangePickerProps;
