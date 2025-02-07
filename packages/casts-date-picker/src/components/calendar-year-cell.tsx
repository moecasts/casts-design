import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useRipple } from '@casts/common';
import { format } from 'date-fns';

import { useCalendarYearCell } from './hooks';
import { CalendarYearCellProps } from './types';

export const CalendarYearCell = forwardRef<
  HTMLButtonElement,
  CalendarYearCellProps
>((props, ref) => {
  const { year, classes, styles, onClick, modifiers } =
    useCalendarYearCell(props);

  const cellRef = useRef<HTMLButtonElement>(null);

  useRipple(cellRef, {
    disabled: modifiers.disabled,
  });

  useImperativeHandle(ref, () => cellRef.current as HTMLButtonElement);

  return (
    <button
      ref={cellRef}
      disabled={modifiers.disabled || modifiers.outside}
      style={styles}
      className={classes}
      onClick={() => onClick?.(year)}
    >
      {format(year, 'yyyy')}
    </button>
  );
});

CalendarYearCell.displayName = 'CalendarYearCell';
