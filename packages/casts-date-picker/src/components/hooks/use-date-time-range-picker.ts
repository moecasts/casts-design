import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { isArray, isKeyboardConfirm, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import { RangeInputProps, RangeInputValue } from '@casts/range-input';
import { clsx } from 'clsx';
import { format, isEqual, isValid, set } from 'date-fns';

import { DATETIME_FORMAT, TIME_FORMAT } from '../common';
import {
  ChangeContext,
  DateRange,
  DateType,
  UseDateTimeRangePickerProps,
} from '../types';

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

  const [rangeInputValue, setRangeInputValue] = useState<RangeInputValue>([]);

  /**
   * stash time when calendar is changing
   */
  const stashValueRef = useRef<Partial<DateRange>>({});

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
        from: value?.from ? format(value.from as Date, DATETIME_FORMAT) : '',
        to: value?.to ? format(value.to as Date, DATETIME_FORMAT) : '',
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
    const isChanging = Boolean(newValue.from && !newValue.to && value);

    // if range is changing, stash time
    if (isChanging) {
      stashValueRef.current = value;
    }

    const getFinalValue = (payload: {
      oldValue: Date;
      newValue: Date | undefined;
    }) => {
      const { oldValue, newValue } = payload;
      if (!newValue) {
        return;
      }

      let currentValue =
        (oldValue as Date) ||
        set(new Date(), {
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

      if (newValue) {
        currentValue = set(currentValue, {
          year: (newValue as Date).getFullYear(),
          month: (newValue as Date).getMonth(),
          date: (newValue as Date).getDate(),
        });
      }

      return currentValue;
    };

    const range = {
      from: getFinalValue({
        oldValue: stashValueRef.current.from as Date,
        newValue: newValue.from as Date,
      }),

      to: getFinalValue({
        oldValue: stashValueRef.current.to as Date,
        newValue: newValue.to as Date,
      }),
    };

    if (!isChanging) {
      stashValueRef.current = {};
    }

    setValue(range, context);
  };

  const handleTimeChange = (time: string, field: keyof DateRange) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);

    const currentValue = value[field];
    const newValue = set(
      isValid(currentValue) ? new Date(currentValue as Date) : new Date(),
      {
        hours,
        minutes,
        seconds,
      },
    );

    const range = {
      ...value,
      [field]: newValue,
    };

    setValue(range, {});
  };

  const clearValue = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue(undefined as any, { action: 'clear' });
  };

  const formatValue = useCallback((value: DateRange) => {
    const dateRange = (value as DateRange)?.from
      ? [(value as DateRange).from, (value as DateRange).to]
      : value;

    if (!isArray(dateRange)) {
      return;
    }

    return dateRange?.map((date) => {
      if (!date) {
        return '';
      }
      return format(date, DATETIME_FORMAT);
    });
  }, []);

  const formatCalendarValue = (value: DateRange) => {
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

  const formatTimeValue = (currentValue?: DateType) => {
    return currentValue instanceof Date
      ? format(currentValue, TIME_FORMAT)
      : undefined;
  };

  const fromTimeValue = formatTimeValue(value?.from);
  const toTimeValue = formatTimeValue(value?.to);

  const timeDisabled = !isValid(value?.from) || !isValid(value?.to);

  const handleInputChange: RangeInputProps['onChange'] = (value, context) => {
    if (context.action === 'clear') {
      clearValue();
      context.e?.stopPropagation();
      return;
    }

    setRangeInputValue(value);
  };

  const handleInputValueChange = () => {
    const [fromStr, toStr] = rangeInputValue;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let fromDate = new Date(fromStr!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let toDate = new Date(toStr!);

    if (isValid(fromDate) && isValid(toDate) && fromDate > toDate) {
      [fromDate, toDate] = [toDate, fromDate];
    }

    const newValue: DateRange = {
      from: isValid(fromDate) ? fromDate : undefined,
      to: isValid(toDate) ? toDate : undefined,
    };

    if (
      (newValue.from === value?.from ||
        isEqual(newValue.from as Date, value.from as Date)) &&
      (newValue.to === value?.to ||
        isEqual(newValue.to as Date, value.to as Date))
    ) {
      return;
    }

    setValue(newValue, { action: 'input' });
  };

  const handleInputBlur: RangeInputProps['onBlur'] = () => {
    handleInputValueChange();
  };

  const handleInputKeyDown: RangeInputProps['onKeyDown'] = (e) => {
    if (e.code === 'Space' || !isKeyboardConfirm(e.code)) {
      return;
    }

    handleInputValueChange();
  };

  useEffect(() => {
    setRangeInputValue(formatValue(value) || ['', '']);
  }, [value, formatValue]);

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
    visible,
    handleTimeChange,
    handleVisibleChange,
    popupClasses,
    formatCalendarValue,

    fromTimeValue,
    toTimeValue,

    timeDisabled,

    rangeInputValue,
    handleInputChange,
    handleInputBlur,
    handleInputKeyDown,
  };
};
