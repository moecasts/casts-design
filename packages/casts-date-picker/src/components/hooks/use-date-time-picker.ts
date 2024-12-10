import { CSSProperties } from 'react';
import { isArray, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import { clsx } from 'clsx';
import { format, set } from 'date-fns';
import { DateRange } from 'react-day-picker';

import {
  DateValue,
  UseDatePickerProps,
  UseDateTimePickerProps,
} from '../types';
import { ChangeContext } from './use-calendar';

const DATETIME_FORMAT = 'yyyy-MM-dd HH:mm:ss';

export const useDateTimePicker = (
  props: UseDateTimePickerProps & { mode?: any },
) => {
  const { className, style, mode, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('date-time-picker');

  const classes = clsx(prefixCls, className);

  const popupClasses = `${prefixCls}-popup`;

  const panelClasses = `${prefixCls}-panel`;

  const panelDateClasses = `${prefixCls}-panel-date`;
  const panelTimeClasses = `${prefixCls}-panel-time`;

  const styles: CSSProperties = { ...style };

  const [value, setValue] = useControlled(props, 'value', props.onChange);

  const [visible, setVisible] = useControlled(
    props,
    'visible',
    props.onVisibleChange,
  );

  const handleVisibleChange: PopupProps['onVisibleChange'] = (visible) => {
    setVisible(visible);
  };

  const handleSelect = (
    newValue: NonNullable<UseDatePickerProps['value']>,
    context: ChangeContext,
  ) => {
    const finalValue = set(
      (value as Date) ||
        set(new Date(), {
          hours: 0,
          minutes: 0,
          seconds: 0,
        }),
      {
        year: (newValue as Date).getFullYear(),
        month: (newValue as Date).getMonth(),
        date: (newValue as Date).getDate(),
      },
    );

    setValue(finalValue, context);
  };

  const handleInputChange = noop;

  const formatValue = (value: DateValue) => {
    const dateRange = (value as DateRange)?.from
      ? [(value as DateRange).from, (value as DateRange).to]
      : value;

    if (isArray(dateRange)) {
      return dateRange
        ?.map((date) => {
          if (!date) {
            return '';
          }
          return format(date, DATETIME_FORMAT);
        })
        .join(', ');
    }

    return value instanceof Date ? format(value, DATETIME_FORMAT) : undefined;
  };

  const handleTimeChange = (time: string) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const newValue = set(new Date(value as Date), {
      hours,
      minutes,
      seconds,
    });

    setValue(newValue, {});
  };

  const clearValue = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue(undefined as any, { action: 'clear' });
  };

  const formatTimeValue = (value: DateValue) => {
    if (!value) {
      return;
    }

    return format(value as Date, 'HH:mm:ss');
  };

  return {
    ...rest,
    mode,
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
  };
};
