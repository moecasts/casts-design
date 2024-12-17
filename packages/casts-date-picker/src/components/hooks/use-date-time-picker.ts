import { CSSProperties } from 'react';
import { noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import { clsx } from 'clsx';
import { format, isValid, set } from 'date-fns';

import {
  ChangeContext,
  DateValue,
  UseDatePickerProps,
  UseDateTimePickerProps,
} from '../types';

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
   * append `dateString` to context
   */
  const setValue: typeof _setValue = (value, context) => {
    _setValue(value, {
      ...context,
      dateString: isValid(value)
        ? format(value as Date, DATETIME_FORMAT)
        : undefined,
    });
  };

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
    return isValid(new Date(value as Date))
      ? format(value as Date, DATETIME_FORMAT)
      : undefined;
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

  const formatCalendarValue = (value: DateValue) => {
    const date = new Date(value as Date);

    if (!isValid(date)) {
      return;
    }

    return date;
  };

  const formatTimeValue = (value: DateValue) => {
    if (!isValid(new Date(value as Date))) {
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
    formatCalendarValue,
  };
};
