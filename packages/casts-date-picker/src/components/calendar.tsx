import { BaseComponentProps, upperFirst, useDefaultProps } from '@casts/common';

export type CalendarProps = BaseComponentProps & UseCalendarProps;

import { forwardRef, Fragment } from 'react';
import { Button } from '@casts/button';
import { useConfig } from '@casts/config-provider';
import {
  ArrowLeftDoubleLine,
  ArrowLeftSLine,
  ArrowRightDoubleLine,
  ArrowRightSLine,
} from '@casts/icons';
import { Link } from '@casts/link';
import { translate } from '@casts/locale';
import { Space } from '@casts/space';
import { addYears, format } from 'date-fns';

import { CalendarProvider } from './calendar-context';
import { CalendarDayCell } from './calendar-day-cell';
import { CalendarMonthCell } from './calendar-month-cell';
import { CalendarYearCell } from './calendar-year-cell';
import { defaultCalendarProps } from './default-props';
import { useCalendar } from './hooks';
import { CalendarMode, CalendarMonth, UseCalendarProps } from './types';

import '@casts/theme/styles/scss/date-picker.scss';
import './styles/calendar.scss';

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const propsWithDefault = useDefaultProps(props, defaultCalendarProps);

    const {
      headerClasses,
      classes,
      calendar,
      monthClasses,
      weekClasses,
      weekdayClasses,
      monthsClasses,
      navigatorPrevClasses,
      // navigatorCurrentClasses,
      navigatorNextClasses,
      yearsClasses,
      // yearsCellClasses,
      navigatorClasses,
      // month,
      footerClasses,

      handleModeChange,
      handlePreviousYearClick,
      handleNextYearClick,
      handlePreviousMonthClick,
      handleCurrentClick,
      handleNextMonthClick,
      handleMonthClick,
      handleYearClick,
      mode,
      date,
      value,
      handleChange,
      rangeHover,
      handleRangeHover,
    } = useCalendar(propsWithDefault);

    const { locale } = useConfig();

    const renderYears = (year: Date) => {
      const years = calendar.eachYearOfDecade(year);

      years.unshift(addYears(years[0], -1));
      years.push(addYears(years[years.length - 1], 1));

      return (
        <div className={yearsClasses}>
          {years.map((year) => {
            return (
              <CalendarYearCell
                date={date}
                key={year.getTime()}
                year={year}
                onClick={handleYearClick}
              />
            );
          })}
        </div>
      );
    };

    const renderMonths = (year: Date) => {
      const months = calendar.eachMonthOfYear(year);

      return (
        <div className={monthsClasses}>
          {months.map((month) => {
            return (
              <CalendarMonthCell
                date={date}
                key={month.getTime()}
                month={month}
                onClick={handleMonthClick}
              />
            );
          })}
        </div>
      );
    };

    const renderDays = (month: CalendarMonth) => (
      <table className={monthClasses} key={month.weeks[0].days[0].getTime()}>
        <thead>
          <tr className={weekClasses}>
            {month.weeks[0].days.map((day) => (
              <th key={day.getTime()}>
                <span className={weekdayClasses}>{format(day, 'cccccc')}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {month.weeks.map((week) => (
            <tr key={week.days[0].getTime()}>
              {week.days.map((day) => (
                <CalendarDayCell key={day.getTime()} date={date} day={day} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );

    const renderHeader = (month: CalendarMonth) => (
      <div className={headerClasses}>
        <div className={navigatorClasses}>
          {mode !== CalendarMode.Year && (
            <Button
              size="small"
              theme="neutral"
              variant="text"
              className={navigatorPrevClasses}
              icon={<ArrowLeftDoubleLine />}
              onClick={handlePreviousYearClick}
            ></Button>
          )}

          <Button
            size="small"
            theme="neutral"
            variant="text"
            className={navigatorPrevClasses}
            icon={<ArrowLeftSLine />}
            onClick={handlePreviousMonthClick}
          ></Button>
        </div>
        <Space size={'small'}>
          <Link
            theme="neutral"
            onClick={() => handleModeChange(CalendarMode.Month)}
          >
            {format(month.month, 'LLLL')}
          </Link>
          <Link
            theme="neutral"
            onClick={() => handleModeChange(CalendarMode.Year)}
          >
            {format(month.year, 'yyyy')}
          </Link>
        </Space>
        <div className={navigatorClasses}>
          {/* <Button
                  size="small"
                  theme="neutral"
                  variant="text"
                  className={navigatorCurrentClasses}
                  icon={<CircleLine />}
                  onClick={handleCurrentClick}
                ></Button> */}

          <Button
            size="small"
            theme="neutral"
            variant="text"
            className={navigatorNextClasses}
            icon={<ArrowRightSLine />}
            onClick={handleNextMonthClick}
          ></Button>
          {mode !== CalendarMode.Year && (
            <Button
              size="small"
              theme="neutral"
              variant="text"
              className={navigatorNextClasses}
              icon={<ArrowRightDoubleLine />}
              onClick={handleNextYearClick}
            ></Button>
          )}
        </div>
      </div>
    );

    const today = upperFirst(translate(locale.calendar.today) as string);
    const renderFooter = () => {
      const footer = props.renderFooter ? (
        props.renderFooter()
      ) : (
        <Link size="small" onClick={handleCurrentClick}>
          {today}
        </Link>
      );

      if (!footer) {
        return null;
      }

      return <div className={footerClasses}>{footer}</div>;
    };

    return (
      <CalendarProvider
        value={value}
        handleChange={handleChange}
        rangeHover={rangeHover}
        handleRangeHover={handleRangeHover}
      >
        <div className={classes} ref={ref}>
          {calendar.months.map((month) => (
            <Fragment key={month.weeks[0].days[0].getTime()}>
              {renderHeader(month)}
              {mode === CalendarMode.Year && renderYears(month.year)}
              {mode === CalendarMode.Month && renderMonths(month.year)}
              {mode === CalendarMode.Day && renderDays(month)}
              {renderFooter()}
            </Fragment>
          ))}
        </div>
      </CalendarProvider>
    );
  },
);

Calendar.displayName = 'Calendar';
