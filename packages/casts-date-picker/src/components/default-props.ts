import { CalendarProps } from './calendar';
import {
  CalendarType,
  DatePickerMode,
  DatePickerProps,
  DateRangePickerProps,
} from './types';

export const defaultCalendarProps = {
  type: CalendarType.Single,
} satisfies CalendarProps;

export const defaultDatePickerProps = {
  mode: DatePickerMode.Single,
} satisfies DatePickerProps;

export const defaultDateRangePickerProps = {} satisfies DateRangePickerProps;
