import { BaseComponentProps } from '@casts/common';

import { useCalendar } from './hooks';

export type CalendarProps = BaseComponentProps & any;

import { forwardRef } from 'react';

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const { classes, calendar } = useCalendar(props);

    return (
      <div ref={ref} className={classes}>
        calendar
      </div>
    );
  },
);

Calendar.displayName = 'Calendar';
