import { CSSProperties } from 'react';
import { isArray, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import { clsx } from 'clsx';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import {
  DatePickerMode,
  DateValue,
  UseDatePickerProps,
  UseDateTimePickerProps,
} from '../types';
import { ChangeContext } from './use-calendar';

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
          return format(date, 'yyyy-MM-dd');
        })
        .join(', ');
    }

    return value instanceof Date ? format(value, 'yyyy-MM-dd') : undefined;
  };

  const clearValue = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue(undefined as any, { action: 'clear' });
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
    clearValue,
    handleInputChange,
    visible,
    handleVisibleChange,
    popupClasses,
  };
};
