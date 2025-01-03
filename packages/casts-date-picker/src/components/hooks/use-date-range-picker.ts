import { CSSProperties, useMemo } from 'react';
import { isArray, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import { clsx } from 'clsx';
import { format } from 'date-fns';

import { getDayPickerClassNames } from '../helpers';
import { ChangeContext, DateRange, UseDateRangePickerProps } from '../types';

const DATE_FORMAT = 'yyyy-MM-dd';

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

  const [value, _setValue] = useControlled(
    props,
    'value',
    props.onChange || ((value, context) => console.log({ value, context })),
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

  const formatValue = (value: DateRange) => {
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
