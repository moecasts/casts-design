import { CSSProperties, useMemo } from 'react';
import { noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import { clsx } from 'clsx';
import { format, isValid } from 'date-fns';

import { getDayPickerClassNames } from '../helpers';
import {
  ChangeContext,
  DatePickerMode,
  DateValue,
  UseDatePickerProps,
} from '../types';

const DATE_FORMAT = 'yyyy-MM-dd';

export const useDatePicker = (props: UseDatePickerProps) => {
  const { className, style, mode, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('date-picker');

  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = { ...style };

  const dayPickerClassNames = useMemo(
    () => getDayPickerClassNames(prefixCls),
    [prefixCls],
  );

  const [value, _setValue] = useControlled(props, 'value', props.onChange);

  /**
   * append `dateString` to context
   */
  const setValue: typeof _setValue = (value, context) => {
    _setValue(value, {
      ...context,
      dateString: isValid(value)
        ? format(value as Date, DATE_FORMAT)
        : undefined,
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
    const date = new Date(value as Date);
    return isValid(date) ? format(date, DATE_FORMAT) : undefined;
  };

  const formatCalendarValue = (value: DateValue) => {
    const date = new Date(value as Date);

    if (!isValid(date)) {
      return;
    }

    return date;
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
    dayPickerClassNames,
    value,
    handleSelect,
    formatValue,
    clearValue,
    handleInputChange,
    visible,
    handleVisibleChange,
    formatCalendarValue,
  };
};
