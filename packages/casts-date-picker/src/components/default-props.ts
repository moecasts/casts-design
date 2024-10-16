import { CalendarProps, CalendarType } from './hooks';

export const defaultCalendarProps = {
  type: CalendarType.Range,
  defaultValue: {
    from: new Date('2024-08-10'),
    to: new Date('2024-09-04'),
  },

  // type: CalendarType.Single,
  // defaultValue: new Date('2024-10-10'),
} satisfies CalendarProps;
