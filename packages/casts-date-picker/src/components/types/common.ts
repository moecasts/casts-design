export type DateType = Date | string;

export type DateRange = {
  from: DateType | undefined;
  to?: DateType | undefined;
};

export type DateValue = DateType | DateType[];

export type TimeValue = string;

export type ChangeContext = {
  event?: Event;
  action?: 'clear' | 'input';
  dateString?: string;
  dateStrings?: string[];
  rangeString?: {
    from: string;
    to: string;
  };
};

export type PickerChangeContext = ChangeContext;

export type CalendarDateValue = DateValue | DateRange;
