import { useEffect, useMemo, useRef, useState } from 'react';
import {
  createMultipleValueActions,
  isArray,
  noop,
  useControlled,
} from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';
import {
  eachMonthOfInterval,
  eachYearOfInterval,
  isAfter,
  isSameDay,
  setYear,
  WeekOptions,
} from 'date-fns';

import { dateLib as defaultDateLib } from '../helpers';
import {
  CalendarMode,
  CalendarMonth,
  CalendarType,
  ChangeContext,
  DateRange,
  DateType,
  DateValue,
  UseCalendarProps,
  Week,
} from '../types';

const sortRange = (range: DateRange) => {
  if (range.from && range.to && isAfter(range.from, range.to)) {
    return { from: range.to, to: range.from };
  }

  return range;
};

const SIX_WEEK_DAYS = 42;

const getMonthStructure = (
  month: Date,
  dateLib: typeof defaultDateLib,
): CalendarMonth => {
  const weekOptions: WeekOptions = {
    weekStartsOn: 1,
  };

  let start = dateLib.startOfWeek(dateLib.startOfMonth(month), weekOptions);
  let end = dateLib.endOfWeek(dateLib.endOfMonth(month), weekOptions);
  const weeks: Week[] = [];

  // fixed to 6 weeks
  if (dateLib.differenceInCalendarDays(end, start) + 1 < SIX_WEEK_DAYS) {
    end = dateLib.addWeeks(end, 1);
  }

  while (start <= end) {
    const week: Week = { days: [] };
    for (let i = 0; i < 7; i++) {
      week.days.push(start);
      start = dateLib.addDays(start, 1);
    }
    weeks.push(week);
  }

  return { weeks, month, year: dateLib.startOfYear(month) };
};

export const useCalendar = (props: UseCalendarProps = {}) => {
  const {
    className,
    disabled,
    minDate,
    maxDate,
    weekStartsOn = 0,
    type,
    dateLib = defaultDateLib,
    onChange,
    onDateChange,
  } = props;

  const [value, setValue] = useControlled(props, 'value', onChange);
  const [rangeHover, setRangeHover] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  const [date, setDate] = useControlled(
    props,
    'date',
    onDateChange,
    new Date(),
  );

  const multipleValueActions = useMemo(() => {
    if (type !== CalendarType.Multiple) {
      return;
    }

    const values = isArray(value) ? value : [];

    return createMultipleValueActions<DateType>(values, setValue, isSameDay);
  }, [setValue, type, value]);

  const [mode, setMode] = useControlled(props, 'mode', noop, CalendarMode.Day);

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('calendar');

  const classes = clsx(prefixCls, className);

  const yearsClasses = `${prefixCls}-years`;
  const yearsCellClasses = `${prefixCls}-years-cell`;
  const monthsClasses = `${prefixCls}-months`;
  const monthsCellClasses = `${prefixCls}-months-cell`;
  const monthClasses = `${prefixCls}-month`;
  const weekClasses = `${prefixCls}-week`;
  const weekdayClasses = `${prefixCls}-weekday`;

  const headerClasses = `${prefixCls}-header`;
  const footerClasses = `${prefixCls}-footer`;

  const navigatorClasses = `${prefixCls}-navigator`;
  const navigatorPrevClasses = `${prefixCls}-navigator-prev`;
  const navigatorCurrentClasses = `${prefixCls}-navigator-current`;
  const navigatorNextClasses = `${prefixCls}-navigator-next`;

  const months = useMemo(
    () => [getMonthStructure(date, dateLib)],
    [date, dateLib],
  );

  const goToMonth = (month: Date) => {
    setDate(month);
  };

  const goToDate = (date: Date) => {
    setDate(date);
  };

  const getWeekdays = () => {
    const weekStart = dateLib.startOfWeek(new Date(), { weekStartsOn });
    return Array.from({ length: 7 }, (_, i) => dateLib.addDays(weekStart, i));
  };

  const isDateDisabled = (date: Date) => {
    if (typeof disabled === 'function') {
      return disabled(date);
    }
    if (Array.isArray(disabled)) {
      return disabled.some((d) => dateLib.isSameDay(d, date));
    }
    if (minDate && date < minDate) {
      return true;
    }
    if (maxDate && date > maxDate) {
      return true;
    }
    return false;
  };

  const goToPreviousDecade = () => {
    setDate(dateLib.addYears(date, -10));
  };

  const goToNextDecade = () => {
    setDate(dateLib.addYears(date, 10));
  };

  const goToPreviousYear = () => {
    setDate(dateLib.addYears(date, -1));
  };

  const goToNextYear = () => {
    setDate(dateLib.addYears(date, 1));
  };

  const goToPreviousMonth = () => {
    setDate(dateLib.addMonths(date, -1));
  };

  const goToNextMonth = () => {
    setDate(dateLib.addMonths(date, 1));
  };

  const eachMonthOfYear = (year: Date) => {
    return eachMonthOfInterval({
      start: dateLib.startOfYear(year),
      end: dateLib.endOfYear(year),
    });
  };

  const eachYearOfDecade = (year: Date) => {
    return eachYearOfInterval({
      start: dateLib.startOfDecade(year),
      end: dateLib.endOfDecade(year),
    });
  };

  const calendar = {
    months,
    goToMonth,
    goToDate,
    getMonthStructure: (month: Date) => getMonthStructure(month, dateLib),
    getWeekdays,
    isDateDisabled,
    goToPreviousYear,
    goToNextYear,
    goToPreviousMonth,
    goToNextMonth,
    eachMonthOfYear,
    eachYearOfDecade,
    goToPreviousDecade,
    goToNextDecade,
  };

  const handlePreviousYearClick = () => {
    calendar.goToPreviousYear();
  };

  const handleNextYearClick = () => {
    calendar.goToNextYear();
  };

  const handlePreviousMonthClick = () => {
    if (mode === CalendarMode.Year) {
      calendar.goToPreviousDecade();
      return;
    }
    calendar.goToPreviousMonth();
  };

  const handleCurrentClick = () => {
    const today = new Date();
    calendar.goToMonth(today);
  };

  const handleNextMonthClick = () => {
    if (mode === CalendarMode.Year) {
      calendar.goToNextDecade();
      return;
    }
    calendar.goToNextMonth();
  };

  const handleModeChange = (mode: CalendarMode) => {
    setMode(mode);
  };

  const handleYearClick = (year: Date) => {
    const date = setYear(calendar.months[0].month, year.getFullYear());
    calendar.goToMonth(date);
    handleModeChange(CalendarMode.Month);
  };

  const handleMonthClick = (month: Date) => {
    calendar.goToMonth(month);
    handleModeChange(CalendarMode.Day);
  };

  /** range calendar handlers start */
  const RANGE_SELECT_LENGTH = 2;
  const temporaryRangeSelectIndexRef = useRef(0);

  const increaseTemporaryRangeSelectIndex = () => {
    temporaryRangeSelectIndexRef.current =
      (temporaryRangeSelectIndexRef.current + 1) % RANGE_SELECT_LENGTH;
  };

  const temporaryRangeRef = useRef<DateRange>({
    from: undefined,
    to: undefined,
  });
  /** range calendar handlers end */

  const handleChange = (value: DateValue) => {
    if (type === CalendarType.Single) {
      const context: ChangeContext = {};
      setValue(value, context);
      return;
    }

    if (type === CalendarType.Multiple && multipleValueActions) {
      multipleValueActions.toggleValue(value as DateType);
      return;
    }

    if (type === CalendarType.Range) {
      if (temporaryRangeSelectIndexRef.current === 0) {
        temporaryRangeRef.current.from = value as DateType;

        const range: DateRange = sortRange({
          ...temporaryRangeRef.current,
        });

        const context: ChangeContext = {};
        setValue(range, context);
      }

      if (temporaryRangeSelectIndexRef.current === RANGE_SELECT_LENGTH - 1) {
        const range: DateRange = sortRange({
          ...temporaryRangeRef.current,
          to: value as DateType,
        });

        temporaryRangeRef.current = { from: undefined, to: undefined };
        const context: ChangeContext = {};
        setValue(range, context);
      }

      increaseTemporaryRangeSelectIndex();
      return;
    }
  };

  const handleRangeHover = (endValue: DateType, action: 'start' | 'end') => {
    if (temporaryRangeSelectIndexRef.current === 0) {
      return;
    }

    if (action === 'end') {
      setRangeHover({ from: undefined, to: undefined });
      return;
    }

    const rangeHover = sortRange({
      ...(value as DateRange),
      to: endValue,
    });

    setRangeHover(rangeHover);
  };

  // auto clear range hover unless value.from set and value.to not set
  useEffect(() => {
    const range = value as DateRange | undefined;

    if (range && range?.from && !range?.to) {
      return;
    }

    setRangeHover({ from: undefined, to: undefined });
  }, [value]);

  return {
    date,
    mode,
    value,

    classes,
    calendar,
    yearsClasses,
    yearsCellClasses,
    monthClasses,
    weekClasses,
    weekdayClasses,
    headerClasses,
    footerClasses,
    monthsClasses,
    monthsCellClasses,

    navigatorClasses,
    navigatorPrevClasses,
    navigatorCurrentClasses,
    navigatorNextClasses,

    handleModeChange,
    handleChange,
    handlePreviousYearClick,
    handleNextYearClick,
    handlePreviousMonthClick,
    handleCurrentClick,
    handleNextMonthClick,
    handleMonthClick,
    handleYearClick,

    rangeHover,
    handleRangeHover,
  };
};
