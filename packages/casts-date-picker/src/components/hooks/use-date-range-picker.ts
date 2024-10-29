import { CSSProperties, useMemo } from 'react';
import { isArray, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import { clsx } from 'clsx';
import { format } from 'date-fns';

import { getDayPickerClassNames } from '../helpers';
import { DateRange, DateValue, UseDateRangePickerProps } from '../types';
import { ChangeContext } from './use-calendar';

export const useDateRangePicker = (props: UseDateRangePickerProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('date-range-picker');

  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = { ...style };

  const dayPickerClassNames = useMemo(
    () => getDayPickerClassNames(prefixCls),
    [prefixCls],
  );

  const [value, setValue] = useControlled(props, 'value', props.onChange);

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

  const handleInputChange = noop;

  const formatValue = (value: DateValue) => {
    const dateRange = (value as DateRange)?.from
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

    return value instanceof Date ? format(value, 'yyyy-MM-dd') : undefined;
  };

  const clearValue = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue(undefined as any, { action: 'clear' });
  };

  return {
    ...rest,
    classes,
    styles,
    dayPickerClassNames,
    value,
    handleSelect,
    formatValue,
    clearValue,
    handleInputChange,
    visible,
    handleVisibleChange,
  };
};
