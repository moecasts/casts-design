import { CSSProperties } from 'react';
import { isArray, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import { clsx } from 'clsx';
import { format, isValid, set } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { ChangeContext, UseDateTimeRangePickerProps } from '../types';

const DATETIME_FORMAT = 'yyyy-MM-dd HH:mm:ss';

const DATE_FORMAT = 'yyyy-MM-dd';

const TIME_FORMAT = 'HH:mm:ss';

export const useDateTimeRangePicker = (props: UseDateTimeRangePickerProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('date-time-range-picker');

  const classes = clsx(prefixCls, className);

  const popupClasses = `${prefixCls}-popup`;

  const panelClasses = `${prefixCls}-panel`;

  const panelDateClasses = `${prefixCls}-panel-date`;
  const panelTimeClasses = `${prefixCls}-panel-time`;

  const styles: CSSProperties = { ...style };

  const [value, _setValue] = useControlled(
    props,
    'value',
    props.onChange || console.log,
  );

  const [visible, setVisible] = useControlled(
    props,
    'visible',
    props.onVisibleChange,
  );

  /**
   * append `rangeString` to context
   */
  const setValue: typeof _setValue = (value, context) => {
    _setValue(value, {
      ...context,
      rangeString: {
        from: value?.from ? format(value.from as Date, DATE_FORMAT) : '',
        to: value?.to ? format(value.to as Date, DATE_FORMAT) : '',
      },
    });
  };

  const handleVisibleChange: PopupProps['onVisibleChange'] = (visible) => {
    setVisible(visible);
  };

  const handleSelect = (
    newValue: NonNullable<UseDateTimeRangePickerProps['value']>,
    context: ChangeContext,
  ) => {
    setValue(newValue, context);
    // const finalValue = set(
    //   (value as Date) ||
    //     set(new Date(), {
    //       hours: 0,
    //       minutes: 0,
    //       seconds: 0,
    //     }),
    //   {
    //     year: (newValue as Date).getFullYear(),
    //     month: (newValue as Date).getMonth(),
    //     date: (newValue as Date).getDate(),
    //   },
    // );
    //
    // setValue(finalValue, context);
  };

  const handleInputChange = noop;

  const formatValue = (value: DateRange) => {
    const dateRange = (value as DateRange)?.from
      ? [(value as DateRange).from, (value as DateRange).to]
      : value;

    if (isArray(dateRange)) {
      return dateRange?.map((date) => {
        if (!date) {
          return '';
        }
        return format(date, DATETIME_FORMAT);
      });
    }

    return value instanceof Date ? format(value, DATETIME_FORMAT) : undefined;
  };

  const handleTimeChange = (time: string) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const newValue = set(
      isValid(value) ? new Date(value as Date) : new Date(),
      {
        hours,
        minutes,
        seconds,
      },
    );

    setValue(newValue, {});
  };

  const clearValue = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue(undefined as any, { action: 'clear' });
  };

  const formatCalendarValue = (value: DateRange) => {
    const dateRange = (value as DateRange)?.from
      ? [(value as DateRange).from, (value as DateRange).to]
      : value;

    if (isArray(dateRange)) {
      return dateRange?.map((date) => {
        if (!date) {
          return '';
        }
        return format(date, DATE_FORMAT);
      });
    }

    return value instanceof Date ? format(value, DATE_FORMAT) : undefined;
  };

  const formatTimeValue = (value: DateRange) => {
    const currentValue = value?.from;

    return currentValue instanceof Date
      ? format(currentValue, TIME_FORMAT)
      : undefined;
  };

  return {
    ...rest,
    classes,
    styles,
    panelClasses,
    panelDateClasses,
    panelTimeClasses,
    value,
    handleSelect,
    formatValue,
    formatTimeValue,
    clearValue,
    handleInputChange,
    visible,
    handleTimeChange,
    handleVisibleChange,
    popupClasses,
    formatCalendarValue,
  };
};
