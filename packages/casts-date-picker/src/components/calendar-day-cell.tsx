import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Badge } from '@casts/badge';
import { useRipple } from '@casts/common';

import { useCalendarDayCell } from './hooks';
import { CalendarDayCellProps } from './types';

export const CalendarDayCell = forwardRef<
  HTMLButtonElement,
  CalendarDayCellProps
>((props, ref) => {
  const {
    classes,
    styles,
    day,
    modifiers,
    handleDayClick,
    buttonClasses,
    handleMouseEnter,
    handleMouseLeave,
  } = useCalendarDayCell(props);

  const cellRef = useRef<HTMLButtonElement>(null);

  useRipple(cellRef, {
    disabled: modifiers.disabled || modifiers.outside,
  });

  useImperativeHandle(ref, () => cellRef.current as HTMLButtonElement);

  let content = (
    <button
      ref={cellRef}
      disabled={modifiers.disabled || modifiers.outside}
      className={buttonClasses}
      onClick={() => handleDayClick(day)}
      onMouseEnter={() => handleMouseEnter(day)}
      onMouseLeave={() => handleMouseLeave(day)}
    >
      {day.getDate()}
    </button>
  );

  if (modifiers.today) {
    content = (
      <Badge dot placement={[-1, -1]}>
        {content}
      </Badge>
    );
  }

  return (
    <td className={classes} style={styles}>
      {content}
    </td>
  );
});

CalendarDayCell.displayName = 'CalendarDayCell';
