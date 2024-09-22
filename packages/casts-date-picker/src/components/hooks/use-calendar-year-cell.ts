import { CSSProperties } from 'react';
import { BaseComponentProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { isSameYear } from 'date-fns';

export type UseCalendarYearCellProps = BaseComponentProps &
  any & {
    disabled?: boolean;
    year?: Date;
    selectedYear?: Date;
  };

export const useCalendarYearCell = (props: UseCalendarYearCellProps) => {
  const { className, style, disabled, year, date, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('calendar-year-cell');

  const modifiers = {
    disabled,
    selected: isSameYear(date, year),
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
