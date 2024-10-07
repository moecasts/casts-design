import { CalendarProps, CalendarType } from './hooks';

export const defaultCalendarProps = {
  type: CalendarType.Range,
  defaultValue: {
    from: new Date('2024-08-10'),
    to: new Date('2024-09-02'),
  },
} satisfies CalendarProps;
