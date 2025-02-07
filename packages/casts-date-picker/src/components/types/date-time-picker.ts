import { ChangeContext, DateValue } from './common';
import { BaseDatePickerProps } from './date-picker';

export type UseDateTimePickerProps = BaseDatePickerProps & {
  value?: DateValue;

  defaultValue?: DateValue;

  onChange?: (value: DateValue, context: ChangeContext) => void;
};

export type DateTimePickerProps = UseDateTimePickerProps;
