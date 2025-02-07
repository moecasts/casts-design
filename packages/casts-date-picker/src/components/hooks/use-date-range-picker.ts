import { CSSProperties, useCallback, useEffect, useState } from 'react';
import { isArray, isKeyboardConfirm, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import { RangeInputProps, RangeInputValue } from '@casts/range-input';
import { clsx } from 'clsx';
import { format, isEqual, isValid } from 'date-fns';

import { DATE_FORMAT } from '../common';
import { ChangeContext, DateRange, UseDateRangePickerProps } from '../types';

export const useDateRangePicker = (props: UseDateRangePickerProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('date-range-picker');

  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = { ...style };

  const [value, _setValue] = useControlled(props, 'value', props.onChange);

  const [rangeInputValue, setRangeInputValue] = useState<RangeInputValue>([]);

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

  const [visible, setVisible] = useControlled(
    props,
    'visible',
    props.onVisibleChange,
  );

  const handleVisibleChange: PopupProps['onVisibleChange'] = (visible) => {
    setVisible(visible);
  };

  const handleSelect = (value: DateRange, context: ChangeContext) => {
    setValue(value, context);
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
      return format(date, DATE_FORMAT);
    });
  }, []);

  const clearValue = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue(undefined as any, { action: 'clear' });
  };

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
    value,
    handleSelect,
    formatValue,
    clearValue,
    visible,
    handleVisibleChange,

    rangeInputValue,
    handleInputChange,
    handleInputBlur,
    handleInputKeyDown,
  };
};
