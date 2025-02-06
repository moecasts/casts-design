import { CSSProperties } from 'react';
import { isArray } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { isSameDay, isSameMonth, isWithinInterval } from 'date-fns';

import { useCalendarContext } from '../calendar-context';
import { DateRange, DateValue, UseCalendarDayCellProps } from '../types';

export const useCalendarDayCell = (props: UseCalendarDayCellProps) => {
  const { className, style, disabled, day, date, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const { value, handleChange, rangeHover, handleRangeHover } =
    useCalendarContext();

  const prefixCls = getPrefixCls('calendar-day-cell');

  const { from: rangeFrom, to: rangeTo } = (value || {}) as DateRange;

  const start = rangeFrom && isSameDay(day, rangeFrom);
  const end = rangeTo && isSameDay(day, rangeTo);

  const outside = date && !isSameMonth(day, date);

  const isSelected = (payload: { value?: DateValue; day: Date }) => {
    const { value, day } = payload;
    if (!value) {
      return false;
    }

    if (isArray(value)) {
      return value.some((v) => isSameDay(v, day));
    }

    if (value instanceof Date) {
      return isSameDay(value, day);
    }

    return false;
  };

  const range =
    rangeFrom &&
    rangeTo &&
    isWithinInterval(day, {
      start: rangeFrom,
      end: rangeTo,
    });

  const modifiers = {
    disabled: disabled || outside,
    outside,
    today: isSameDay(day, new Date()),
    start,
    end,
    range,
    selected: isSelected({ value: value as DateValue, day }),
  };

  const { from: rangeHoverFrom, to: rangeHoverTo } = (rangeHover ||
    {}) as DateRange;

  const withinRangeHover =
    rangeHoverFrom &&
    rangeHoverTo &&
    isWithinInterval(day, {
      start: rangeHoverFrom,
      end: rangeHoverTo,
    });

  // if (day.getDate() === 4) {
  //   console.log('debug1 rangeFrom:', {
  //     day: day.getDate(),
  //     rangeHover,
  //     withinRangeHover,
  //   });
  // }

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--disabled`]: modifiers.disabled,
    [`${prefixCls}--outside`]: modifiers.outside,
    [`${prefixCls}--start`]: modifiers.start,
    [`${prefixCls}--end`]: modifiers.end,
    [`${prefixCls}--range`]: modifiers.range || withinRangeHover,
    [`${prefixCls}--selected`]: modifiers.selected,
  });

  const buttonClasses = clsx(`${prefixCls}-button`, {
    [`${prefixCls}-button--disabled`]: modifiers.disabled,
    [`${prefixCls}-button--selected`]: modifiers.selected,
  });

  const styles: CSSProperties = {
    ...style,
  };

  const handleDayClick = (day: Date) => {
    handleChange?.(day);
  };

  const handleMouseEnter = (day: Date) => {
    handleRangeHover?.(day, 'start');
  };

  const handleMouseLeave = (day: Date) => {
    handleRangeHover?.(day, 'end');
  };

  return {
    ...rest,
    classes,
    styles,
    day,
    modifiers,
    buttonClasses,
    handleDayClick,
    handleMouseEnter,
    handleMouseLeave,
  };
};
