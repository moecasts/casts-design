import { CSSProperties, useCallback, useEffect, useState } from 'react';
import { isKeyboardConfirm, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { InputProps } from '@casts/input';
import { PopupProps } from '@casts/popup';
import { clsx } from 'clsx';
import { format, isSameDay, isValid } from 'date-fns';

import { DATE_FORMAT } from '../common';
import {
  CalendarDateValue,
  ChangeContext,
  DatePickerMode,
  DateType,
  DateValue,
  UseDatePickerProps,
} from '../types';

export const useDatePicker = (props: UseDatePickerProps) => {
  const { className, style, mode, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('date-picker');

  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = { ...style };

  const [value, _setValue] = useControlled(props, 'value', props.onChange);

  const [inputValue, setInputValue] = useState('');

  const getDateString = (value: DateType) => {
    return isValid(value) ? format(value as Date, DATE_FORMAT) : undefined;
  };

  const formatValue = useCallback(
    (value: DateValue) => {
      if (mode === DatePickerMode.Single) {
        const date = new Date(value as Date);
        return getDateString(date);
      }

      if (mode === DatePickerMode.Multiple) {
        return (value as DateType[])
          ?.map((value) => new Date(value as Date))
          .map(getDateString)
          .filter(Boolean)
          .join(',');
      }

      return undefined;
    },
    [mode],
  );

  /**
   * append `dateString` to context
   */
  const setValue: typeof _setValue = (value, context) => {
    const newContext = {
      ...context,
    };

    if (mode === DatePickerMode.Single) {
      newContext.dateString = getDateString(value as DateType);
    }

    if (mode === DatePickerMode.Multiple) {
      newContext.dateStrings = (value as DateType[])
        ?.map(getDateString)
        .filter(Boolean) as string[];
    }

    _setValue(value, newContext);
  };

  const [visible, setVisible] = useControlled(
    props,
    'visible',
    props.onVisibleChange,
  );

  const handleVisibleChange: PopupProps['onVisibleChange'] = (visible) => {
    setVisible(visible);
  };

  const handleSelect = (
    value: NonNullable<UseDatePickerProps['value']>,
    context: ChangeContext,
  ) => {
    if (mode === DatePickerMode.Single) {
      setValue(value, context);
      handleVisibleChange(false);
    }

    if (mode === DatePickerMode.Multiple) {
      setValue(value, context);
    }
  };

  const handleInputChange: InputProps['onChange'] = (value, context) => {
    if (context.action === 'clear') {
      clearValue();
      context.e?.stopPropagation();
      return;
    }

    if (mode === DatePickerMode.Multiple) {
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

    if (isSameDay(date, value as Date)) {
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

  const formatCalendarValue = (
    value: DateValue,
  ): CalendarDateValue | undefined => {
    if (mode === DatePickerMode.Single) {
      const date = new Date(value as Date);

      if (!isValid(date)) {
        return;
      }

      return date;
    }

    if (mode === DatePickerMode.Multiple) {
      const dates = (value as DateType[])
        ?.map((item) => {
          const date = new Date(item as Date);
          if (!isValid(date)) {
            return;
          }

          return date;
        })
        .filter(Boolean) as Date[] | undefined;

      return dates;
    }

    return;
  };

  const clearValue = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue(undefined as any, { action: 'clear' });
  };

  useEffect(() => {
    setInputValue(formatValue(value) || '');
  }, [value, formatValue]);

  return {
    ...rest,
    mode,
    classes,
    styles,
    value,
    handleSelect,
    formatValue,
    clearValue,
    visible,
    handleVisibleChange,
    formatCalendarValue,
    handleInputChange,
    handleInputBlur,
    inputValue,
    handleInputKeyDown,
  };
};
