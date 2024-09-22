import { createContext, FC, useContext } from 'react';
import { BaseComponentProps } from '@casts/common';

import { DateValue } from './types';

interface CalendarContextProps {
  value?: DateValue;
  handleChange?: (value: DateValue) => void;
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
