import { useState } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfMonth,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

export enum CalendarMode {
  Single = 'single',
  Multiple = 'multiple',
  Range = 'range',
}

export interface CalendarProps {
  defaultMonth?: Date;
  selected?: Date | Date[];
  onSelect?: (date: Date | Date[]) => void;
  mode?: CalendarMode;
  disabled?: Date[] | ((date: Date) => boolean);
  minDate?: Date;
  maxDate?: Date;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export const useCalendar = (props: CalendarProps = {}) => {
  const {
    defaultMonth = new Date(),
    selected,
    onSelect,
    mode = CalendarMode.Single,
    disabled,
    minDate,
    maxDate,
    weekStartsOn = 0,
  } = props;

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('calendar');

  const classes = clsx(prefixCls);

  const [months, setMonths] = useState<Date[]>([startOfMonth(defaultMonth)]);
  const [selectedDates, setSelectedDates] = useState<Date[]>(
    Array.isArray(selected) ? selected : selected ? [selected] : [],
  );

  const goToMonth = (month: Date) => {
    setMonths([startOfMonth(month)]);
  };

  const goToDate = (date: Date) => {
    setMonths([startOfMonth(date)]);
  };

  const selectDate = (date: Date) => {
    let newSelectedDates: Date[];
    switch (mode) {
      case CalendarMode.Single:
        newSelectedDates = [date];
        break;
      case CalendarMode.Multiple:
        newSelectedDates = isDateSelected(date)
          ? selectedDates.filter((d) => !isSameDay(d, date))
          : [...selectedDates, date];
        break;
      case CalendarMode.Range:
        if (selectedDates.length === 0 || selectedDates.length === 2) {
          newSelectedDates = [date];
        } else {
          newSelectedDates = [selectedDates[0], date].sort(
            (a, b) => a.getTime() - b.getTime(),
          );
        }
        break;
      default:
        newSelectedDates = selectedDates;
    }
    setSelectedDates(newSelectedDates);
    onSelect?.(mode === CalendarMode.Single ? date : newSelectedDates);
  };

  const getMonthDays = (month: Date) => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const days: Date[] = [];
    for (let day = start; day <= end; day = addDays(day, 1)) {
      days.push(day);
    }
    return days;
  };

  const getWeekdays = () => {
    const weekStart = startOfWeek(new Date(), { weekStartsOn });
    return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  };

  const isDateSelected = (date: Date) => {
    return selectedDates.some((d) => isSameDay(d, date));
  };

  const isDateDisabled = (date: Date) => {
    if (typeof disabled === 'function') {
      return disabled(date);
    }
    if (Array.isArray(disabled)) {
      return disabled.some((d) => isSameDay(d, date));
    }
    if (minDate && date < minDate) {
      return true;
    }
    if (maxDate && date > maxDate) {
      return true;
    }
    return false;
  };

  const goToPreviousYear = () => {
    setMonths((prev) => prev.map((month) => addYears(month, -1)));
  };

  const goToNextYear = () => {
    setMonths((prev) => prev.map((month) => addYears(month, 1)));
  };

  const goToPreviousMonth = () => {
    setMonths((prev) => prev.map((month) => addMonths(month, -1)));
  };

  const goToNextMonth = () => {
    setMonths((prev) => prev.map((month) => addMonths(month, 1)));
  };

  const goToPreviousWeek = () => {
    setMonths((prev) => prev.map((month) => addWeeks(month, -1)));
  };

  const goToNextWeek = () => {
    setMonths((prev) => prev.map((month) => addWeeks(month, 1)));
  };

  const goToPreviousDay = () => {
    setMonths((prev) => prev.map((month) => addDays(month, -1)));
  };

  const goToNextDay = () => {
    setMonths((prev) => prev.map((month) => addDays(month, 1)));
  };

  const calendar = {
    months,
    selectedDates,
    goToMonth,
    goToDate,
    selectDate,
    getMonthDays,
    getWeekdays,
    isDateSelected,
    isDateDisabled,
    goToPreviousYear,
    goToNextYear,
    goToPreviousMonth,
    goToNextMonth,
    goToPreviousWeek,
    goToNextWeek,
    goToPreviousDay,
    goToNextDay,
  };

  return {
    classes,
    calendar,
  };
};
