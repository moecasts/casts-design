import { CSSProperties } from 'react';
import { BaseComponentProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { isSameDay, isSameMonth } from 'date-fns';

import { useCalendarContext } from '../calendar-context';

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

  const outside = !isSameMonth(day, date);

  const modifiers = {
    disabled: disabled || outside,
    outside,
  };

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--disabled`]: modifiers.disabled,
    [`${prefixCls}--outside`]: modifiers.outside,
    [`${prefixCls}--selected`]: value && isSameDay(value, day),
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
  };
};
