import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Badge } from '@casts/badge';
import { useRipple } from '@casts/common';
import { isSameDay } from 'date-fns';

import { useCalendarDayCell, UseCalendarDayCellProps } from './hooks';

export type CalendarDayCellProps = UseCalendarDayCellProps;

export const CalendarDayCell = forwardRef<
  HTMLButtonElement,
  CalendarDayCellProps
>((props, ref) => {
  const { classes, styles, day, modifiers, handleDayClick } =
    useCalendarDayCell(props);

  const cellRef = useRef<HTMLButtonElement>(null);

  useRipple(cellRef, {
    disabled: modifiers.disabled,
  });

  useImperativeHandle(ref, () => cellRef.current as HTMLButtonElement);

  const content = (
    <button
      ref={cellRef}
      disabled={modifiers.disabled || modifiers.outside}
      style={styles}
      className={classes}
      onClick={() => handleDayClick(day)}
    >
      {day.getDate()}
    </button>
  );

  if (isSameDay(day, new Date())) {
    return <Badge dot>{content}</Badge>;
  }

  return content;
});

CalendarDayCell.displayName = 'CalendarDayCell';
