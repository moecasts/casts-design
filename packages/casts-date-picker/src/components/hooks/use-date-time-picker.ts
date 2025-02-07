import { CSSProperties, useCallback, useEffect, useState } from 'react';
import { isKeyboardConfirm, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { InputProps } from '@casts/input';
import { PopupProps } from '@casts/popup';
import { clsx } from 'clsx';
import { format, isEqual, isValid, set } from 'date-fns';

import { DATETIME_FORMAT } from '../common';
import {
  ChangeContext,
  DateValue,
  UseDatePickerProps,
  UseDateTimePickerProps,
} from '../types';

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

  const [inputValue, setInputValue] = useState('');

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

  const clearValue = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue(undefined as any, { action: 'clear' });
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

  const formatValue = useCallback((value: DateValue) => {
    return isValid(new Date(value as Date))
      ? format(value as Date, DATETIME_FORMAT)
      : undefined;
  }, []);

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

  const handleInputChange: InputProps['onChange'] = (value, context) => {
    if (context.action === 'clear') {
      clearValue();
      context.e?.stopPropagation();
      return;
    }

    setInputValue(value as string);
  };

  const handleInputValueChange = () => {
    const date = new Date(inputValue);
    if (!isValid(date)) {
      setInputValue(formatValue(value) || '');
      return;
    }

    if (isEqual(date, value as Date)) {
      return;
    }

    setValue(date, { action: 'input' });
  };

  const handleInputBlur: InputProps['onBlur'] = () => {
    handleInputValueChange();
  };

  const handleInputKeyDown: InputProps['onKeyDown'] = (e) => {
    if (e.code === 'Space' || !isKeyboardConfirm(e.code)) {
      return;
    }

    handleInputValueChange();
  };

  useEffect(() => {
    setInputValue(formatValue(value) || '');
  }, [value, formatValue]);

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
    inputValue,
    handleInputBlur,
    handleInputKeyDown,
  };
};
