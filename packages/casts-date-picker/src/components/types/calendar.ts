import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

import type { dateLib as defaultDateLib } from '../helpers';
import {
  CalendarDateValue,
  ChangeContext,
  DateRange,
  DateType,
  DateValue,
} from './common';

/* --------------------------------- Calendar context ---------------------------------------- */
export interface CalendarContextProps {
  value?: CalendarDateValue;
  handleChange?: (value: DateValue) => void;

  rangeHover?: DateRange;
  handleRangeHover?: (value: DateType, action: 'start' | 'end') => void;
}

/* --------------------------------- Calendar Day Cell ---------------------------------------- */
export type UseCalendarDayCellProps = BaseComponentProps & {
  /**
   * whether the cell is disabled
   */
  disabled?: boolean;
  /**
   * the day of the cell
   */
  day: Date;
  /**
   * the date of the calendar
   */
  date?: Date;
};

export type CalendarDayCellProps = UseCalendarDayCellProps;

/* --------------------------------- Calendar Month Cell ---------------------------------------- */

export type UseCalendarMonthCellProps = BaseComponentProps & {
  disabled?: boolean;
  day?: Date;
  month: Date;
  date: Date;
  onClick?: (month: Date) => void;
};

export type CalendarMonthCellProps = UseCalendarMonthCellProps;

/* --------------------------------- Calendar Year Cell ---------------------------------------- */
export type UseCalendarYearCellProps = BaseComponentProps & {
  disabled?: boolean;
  date: Date;
  year: Date;
  selectedYear?: Date;
  onClick?: (year: Date) => void;
};

export type CalendarYearCellProps = UseCalendarYearCellProps;

/* --------------------------------- Calendar ---------------------------------------- */

export enum CalendarType {
  Single = 'single',
  Multiple = 'multiple',
  Range = 'range',
}

export enum CalendarMode {
  Year = 'year',
  Month = 'month',
  Week = 'week',
  Day = 'day',
}

export interface Week {
  days: Date[];
}

export interface CalendarMonth {
  year: Date;
  month: Date;
  weeks: Week[];
}

export type UseCalendarProps = BaseComponentProps & {
  date?: Date;
  defaultDate?: Date;
  value?: CalendarDateValue;
  defaultValue?: CalendarDateValue;
  onChange?: (value: CalendarDateValue, context: ChangeContext) => void;
  onDateChange?: (date: Date) => void;
  mode?: `${CalendarMode}`;
  type?: `${CalendarType}`;
  disabled?: Date[] | ((date: Date) => boolean);
  minDate?: Date;
  maxDate?: Date;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  dateLib?: typeof defaultDateLib;
  renderFooter?: () => ReactNode;
};

export type CalendarProps = BaseComponentProps & UseCalendarProps;
