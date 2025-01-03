import { createContext, FC, useContext } from 'react';
import { BaseComponentProps } from '@casts/common';

import { CalendarDateValue, DateRange, DateType, DateValue } from './types';

interface CalendarContextProps {
  value?: CalendarDateValue;
  handleChange?: (value: DateValue) => void;

  rangeHover?: DateRange;
  handleRangeHover?: (value: DateType, action: 'start' | 'end') => void;
}

const CalendarContext = createContext<CalendarContextProps>({});

export type CalendarProviderProps = BaseComponentProps & CalendarContextProps;

export const CalendarProvider: FC<CalendarProviderProps> = ({
  children,
  ...value
}) => {
  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = (): CalendarContextProps =>
  useContext(CalendarContext);
