import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { isSameYear } from 'date-fns';

import { UseCalendarYearCellProps } from '../types';

export const useCalendarYearCell = (props: UseCalendarYearCellProps) => {
  const { className, style, disabled, year, date, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('calendar-year-cell');

  const modifiers = {
    disabled,
    selected: isSameYear(date, year),
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
    year,
    modifiers,
    date,
  };
};
