import { CSSProperties, useMemo } from 'react';
import { isArray, isObject, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { getDayPickerClassNames } from '../helpers';
import { UseDatePickerProps } from '../types';

export const useDatePicker = (props: UseDatePickerProps) => {
  const { className, style } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('date-picker');

  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = { ...style };

  const dayPickerClassNames = useMemo(
    () => getDayPickerClassNames(prefixCls),
    [prefixCls],
  );

  const [value, setValue] = useControlled(props, 'value', props.onChange);

  const handleSelect = (value: any) => {
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
        return format(date, 'yyyy-MM-dd');
      });
    }

    return value;
  };

  const clearValue = () => {
    setValue(['', '']);
  };

  return {
    classes,
    styles,
    dayPickerClassNames,
    value,
    handleSelect,
    getValue,
    clearValue,
  };
};
