import { CSSProperties, useEffect } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseDatePickerProps } from '../types';
import { useCalendar } from './use-calendar';

export const useDatePicker = (props: UseDatePickerProps) => {
  const { className, style } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('date-picker');

  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = { ...style };

  const calendar = useCalendar();
  useEffect(() => {
    console.log('debug1', calendar);
  }, []);

  return {
    classes,
    styles,
  };
};
