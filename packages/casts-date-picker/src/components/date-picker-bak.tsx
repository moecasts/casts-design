import { forwardRef, Ref } from 'react';
import { Button } from '@casts/button';
import { isArray, isObject, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import {
  ArrowLeftSLine,
  ArrowRightSLine,
  Calendar2Line,
  CircleLine,
} from '@casts/icons';
import { Popup } from '@casts/popup';
import { RangeInput } from '@casts/range-input';
import { clsx } from 'clsx';
import { zhCN } from 'date-fns/locale';
import dayjs from 'dayjs';
import {
  CustomComponents,
  DateRange,
  DayPicker,
  useDayPicker,
} from 'react-day-picker';

// import { getMonthOptions } from 'react-day-picker/dist/cjs/helpers/getMonthOptions';
import { useDatePicker } from './hooks';
import { DatePickerProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/date-picker.scss';

export const Nav = () => {
  const { nextMonth, previousMonth, goToMonth } = useDayPicker();
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('date-picker-navigator');

  const classes = clsx(prefixCls);
  const prevClasses = `${prefixCls}-prev`;
  const currentClasses = `${prefixCls}-current`;
  const nextClasses = `${prefixCls}-next`;

  const handlePreviousClick = () => {
    if (previousMonth) {
      goToMonth(previousMonth);
    }
  };

  const handleCurrentClick = () => {
    const today = new Date();
    goToMonth(today);
  };

  const handleNextClick = () => {
    if (nextMonth) {
      goToMonth(nextMonth);
    }
  };

  return (
    <div className={classes}>
      <Button
        theme="neutral"
        variant="text"
        className={prevClasses}
        icon={<ArrowLeftSLine />}
        onClick={handlePreviousClick}
      ></Button>

      <Button
        theme="neutral"
        variant="text"
        className={currentClasses}
        icon={<CircleLine />}
        onClick={handleCurrentClick}
      ></Button>

      <Button
        theme="neutral"
        variant="text"
        className={nextClasses}
        icon={<ArrowRightSLine />}
        onClick={handleNextClick}
      ></Button>
    </div>
  );
};

export const DayButton = (
  props: Parameters<CustomComponents['DayButton']>[0],
) => {
  const { day: _day, children, modifiers, ...rest } = props;
  return (
    // @ts-ignore test
    <Button
      {...rest}
      disabled={modifiers.outside}
      variant={modifiers.selected ? 'contained' : 'text'}
      theme={modifiers.selected ? 'brand' : 'neutral'}
      pastel
    >
      {children}
    </Button>
  );
};

export const MonthCaption = (
  props: Parameters<CustomComponents['MonthCaption']>[0],
) => {
  const {} = useDayPicker();

  // const options = getMonthOptions(
  //   props.calendarMonth.date,
  //   undefined,
  //   undefined,
  //   formatMonthDropdown as any,
  //   zhCN,
  //   dateLib,
  // );
  //
  // console.log('debug1 props', options);

  return (
    <>
      <input type="text" />
      <span>xxx</span>
    </>
  );
};

export const DatePicker = forwardRef(
  (props: DatePickerProps, ref: Ref<HTMLDivElement>) => {
    const {} = useDatePicker(props);

    const { getPrefixCls } = useConfig();
    const prefixCls = getPrefixCls('date-picker');

    /**
     * The UI elements composing DayPicker. These elements are mapped to
     * {@link CustomComponents}, the {@link ClassNames} and the {@link Styles} used by
     * DayPicker.
     *
     * Some of these elements are extended by flags and modifiers.
     */
    const classNames = {
      /** The previous button in the navigation. */
      button_previous: `${prefixCls}-button-previous`,
      /** The next button the navigation. */
      button_next: `${prefixCls}-button-next`,
      /** The root component displaying the months and the navigation bar. */
      root: `${prefixCls}-root`,
      /** The Chevron SVG element used by navigation buttons and dropdowns. */
      chevron: `${prefixCls}-chevron`,
      /**
       * The grid cell with the day's date. Extended by {@link DayFlag} and
       * {@link SelectionFlag}.
       */
      day: `${prefixCls}-day`,
      /** The button containing the formatted day's date, inside the grid cell. */
      day_button: `${prefixCls}-day-button`,
      /** The caption label of the month (when not showing the dropdown navigation). */
      caption_label: `${prefixCls}-caption-label`,
      /** The container of the dropdown navigation (when enabled). */
      dropdowns: `${prefixCls}-dropdowns`,
      /** The dropdown element to select for years and months. */
      dropdown: `${prefixCls}-dropdown`,
      /** The container element of the dropdown. */
      dropdown_root: `${prefixCls}-dropdown-root`,
      /** The root element of the footer. */
      footer: `${prefixCls}-footer`,
      /** The month grid. */
      month_grid: `${prefixCls}-month-grid`,
      /** Contains the dropdown navigation or the caption label. */
      month_caption: `${prefixCls}-month-caption`,
      /** The dropdown with the months. */
      months_dropdown: `${prefixCls}-months-dropdown`,
      /** Wrapper of the month grid. */
      month: `${prefixCls}-month`,
      /** The container of the displayed months. */
      months: `${prefixCls}-months`,
      /** The navigation bar with the previous and next buttons. */
      nav: `${prefixCls}-nav`,
      /** The row containing the week. */
      week: `${prefixCls}-week`,
      /** The group of row weeks in a month (`tbody`). */
      weeks: `${prefixCls}-weeks`,
      /** The column header with the weekday. */
      weekday: `${prefixCls}-weekday`,
      /** The row grouping the weekdays in the column headers. */
      weekdays: `${prefixCls}-weekdays`,
      /** The cell containing the week number. */
      week_number: `${prefixCls}-week-number`,
      /** The cell header of the week numbers column. */
      week_number_header: `${prefixCls}-week-number-header`,
      /** The dropdown with the years. */
      years_dropdown: `${prefixCls}-years-dropdown`,

      /** The flags for the {@link UI.Day}. */
      /** The day is disabled. */
      disabled: `${prefixCls}-disabled`,
      /** The day is hidden. */
      hidden: `${prefixCls}-hidden`,
      /** The day is outside the current month. */
      outside: `${prefixCls}-outside`,
      /** The day is focused. */
      focused: `${prefixCls}-focused`,
      /** The day is today. */
      today: `${prefixCls}-today`,

      /**
       * The state that can be applied to the {@link UI.Day} element when in selection
       * mode.
       */
      /** The day is at the end of a selected range. */
      range_end: `${prefixCls}-range-end`,
      /** The day is at the middle of a selected range. */
      range_middle: `${prefixCls}-range-middle`,
      /** The day is at the start of a selected range. */
      range_start: `${prefixCls}-range-start`,
      /** The day is selected. */
      selected: `${prefixCls}-selected`,
    };

    const [value, setValue] = useControlled(props, 'value', noop);

    const handleSelect = (value) => {
      console.log('debug1 handleSelect', value);
      setValue(value);
    };

    const getValue = (value: Date | Date[] | DateRange) => {
      const dateRange = isObject(value)
        ? [(value as DateRange).from, (value as DateRange).to]
        : value;

      if (isArray(dateRange)) {
        return dateRange?.map((date) => {
          if (!date) {
            return '';
          }
          return dayjs(date).format('YYYY-MM-DD');
        });
      }

      return value;
    };

    return (
      <div className={''} ref={ref}>
        <Popup
          content={
            <DayPicker
              // captionLayout="dropdown"
              locale={zhCN}
              mode="range"
              selected={value}
              onSelect={handleSelect}
              classNames={classNames}
              fixedWeeks
              components={{
                Nav,
                DayButton,
                // MonthCaption,
              }}
            />
          }
          trigger="focus"
          placement="bottom-start"
        >
          {/* <Input value={getValue(value)} /> */}
          <RangeInput
            value={getValue(value)}
            suffix={<Calendar2Line />}
            onChange={(_, { action }) => {
              if (action === 'clear') {
                setValue(['', '']);
              }
            }}
          />
        </Popup>
      </div>
    );
  },
);

DatePicker.displayName = 'DatePicker';
