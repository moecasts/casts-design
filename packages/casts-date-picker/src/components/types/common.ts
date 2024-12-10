export type DateType = Date | string;

export type DateRange = {
  from: DateType | undefined;
  to?: DateType | undefined;
};

export type DateValue = DateType | DateType[] | DateRange;

export type TimeValue = string;
