import {
  endOfDecade,
  FormatOptions as DateFnsFormatOptions,
  Locale as DateFnsLocale,
  setDefaultOptions,
  startOfDecade,
} from 'date-fns';
import { GenericDateConstructor } from 'date-fns';
import { addDays } from 'date-fns/addDays';
import { addMonths } from 'date-fns/addMonths';
import { addWeeks } from 'date-fns/addWeeks';
import { addYears } from 'date-fns/addYears';
import { differenceInCalendarDays } from 'date-fns/differenceInCalendarDays';
import { differenceInCalendarMonths } from 'date-fns/differenceInCalendarMonths';
import { endOfISOWeek } from 'date-fns/endOfISOWeek';
import { endOfMonth } from 'date-fns/endOfMonth';
import { endOfWeek } from 'date-fns/endOfWeek';
import { endOfYear } from 'date-fns/endOfYear';
import { format } from 'date-fns/format';
import { getISOWeek } from 'date-fns/getISOWeek';
import { getWeek } from 'date-fns/getWeek';
import { isAfter } from 'date-fns/isAfter';
import { isBefore } from 'date-fns/isBefore';
import { isDate } from 'date-fns/isDate';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';
import { isSameYear } from 'date-fns/isSameYear';
import { enUS, zhCN } from 'date-fns/locale';
import { max } from 'date-fns/max';
import { min } from 'date-fns/min';
import { setMonth } from 'date-fns/setMonth';
import { setYear } from 'date-fns/setYear';
import { startOfDay } from 'date-fns/startOfDay';
import { startOfISOWeek } from 'date-fns/startOfISOWeek';
import { startOfMonth } from 'date-fns/startOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { startOfYear } from 'date-fns/startOfYear';

/** The options for the {@link Formatters}. */
export type FormatOptions = DateFnsFormatOptions;

/** The options for the {@link Labels}. */
export type LabelOptions = DateFnsFormatOptions;

/** The locale used within DayPicker. */
export type Locale = DateFnsLocale;

export type { Month as DateFnsMonth } from 'date-fns';

zhCN;
// setDefaultOptions({ locale: zhCN });
setDefaultOptions({ locale: enUS });

/**
 * Checks if two dates are in the same decade.
 *
 * @param {Date} dateLeft - The first date to compare.
 * @param {Date} dateRight - The second date to compare.
 * @returns {boolean} Returns true if the dates are in the same decade, false otherwise.
 */
export const isSameDecade = (dateLeft: Date, dateRight: Date): boolean => {
  const decadeLeft = Math.floor(dateLeft.getFullYear() / 10) * 10;
  const decadeRight = Math.floor(dateRight.getFullYear() / 10) * 10;
  return decadeLeft === decadeRight;
};

/**
 * The default date library to use with the date picker.
 *
 * @private
 * @internal
 */
export const dateLib = {
  /** The constructor of the date object. */
  Date: Date as GenericDateConstructor,
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getISOWeek,
  getWeek,
  isAfter,
  isBefore,
  isDate,
  isSameDay,
  isSameMonth,
  isSameYear,
  max,
  min,
  setMonth,
  setYear,
  startOfDay,
  startOfISOWeek,
  startOfMonth,
  startOfWeek,
  startOfYear,
  startOfDecade,
  endOfDecade,
  isSameDecade,
};
