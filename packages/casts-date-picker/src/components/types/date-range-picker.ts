import { ChangeContext, DateRange } from './common';
import { BaseDatePickerProps } from './date-picker';

export type UseDateRangePickerProps = BaseDatePickerProps & {
  value?: DateRange;

  defaultValue?: DateRange;

  onChange?: (value: DateRange, context: ChangeContext) => void;
};

export type DateRangePickerProps = UseDateRangePickerProps;
