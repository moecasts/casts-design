import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useRipple } from '@casts/common';
import { format } from 'date-fns';

import { useCalendarMonthCell } from './hooks';
import { CalendarMonthCellProps } from './types';

export const CalendarMonthCell = forwardRef<
  HTMLButtonElement,
  CalendarMonthCellProps
>((props, ref) => {
  const { month, classes, styles, onClick, modifiers } =
    useCalendarMonthCell(props);

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
      onClick={() => onClick?.(month)}
    >
      {format(month, 'LLLL')}
    </button>
  );
});

CalendarMonthCell.displayName = 'CalendarMonthCell';
