import { CSSProperties } from 'react';
import { BaseComponentProps, isArray } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { isSameDay, isSameMonth, isWithinInterval } from 'date-fns';

import { useCalendarContext } from '../calendar-context';
import { DateRange, DateValue } from '../types';

export type UseCalendarDayCellProps = BaseComponentProps &
  any & {
    disabled?: boolean;
    day?: Date;
    month?: Date;
  };

export const useCalendarDayCell = (props: UseCalendarDayCellProps) => {
  const { className, style, disabled, day, date, month, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const { value, handleChange } = useCalendarContext();

  const prefixCls = getPrefixCls('calendar-day-cell');

  const start = isSameDay(day, (value as DateRange)?.from);
  const end = isSameDay(day, (value as DateRange)?.to);

  const outside = !isSameMonth(day, date);

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

  const range = isWithinInterval(day, {
    start: (value as DateRange)?.from,
    end: (value as DateRange)?.to,
  });

  const modifiers = {
    disabled: disabled || outside,
    outside,
    today: isSameDay(day, new Date()),
    start,
    end,
    range,
    selected: isSelected({ value, day }),
  };

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--disabled`]: modifiers.disabled,
    [`${prefixCls}--outside`]: modifiers.outside,
    [`${prefixCls}--start`]: modifiers.start,
    [`${prefixCls}--end`]: modifiers.end,
    [`${prefixCls}--range`]: modifiers.range,
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

  return {
    ...rest,
    classes,
    styles,
    day,
    month,
    modifiers,
    handleDayClick,
    buttonClasses,
  };
};
