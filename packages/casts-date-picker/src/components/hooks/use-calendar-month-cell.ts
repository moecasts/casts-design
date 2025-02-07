import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { isSameMonth } from 'date-fns';

import { UseCalendarMonthCellProps } from '../types';

export const useCalendarMonthCell = (props: UseCalendarMonthCellProps) => {
  const { className, style, disabled, date, month, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('calendar-month-cell');

  const modifiers = {
    disabled,
    selected: isSameMonth(date, month),
    outside: false,
  };

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--disabled`]: modifiers.disabled,
    [`${prefixCls}--selected`]: modifiers.selected,
  });

  const styles: CSSProperties = {
    ...style,
  };

  return {
    ...rest,
    classes,
    styles,
    modifiers,
    date,
    month,
  };
};
