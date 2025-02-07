import { forwardRef, Ref } from 'react';
import { useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Calendar2Line } from '@casts/icons';
import { Input } from '@casts/input';
import { translate } from '@casts/locale';
import { Popup } from '@casts/popup';

import { Calendar } from './calendar';
import { defaultDatePickerProps } from './default-props';
import { useDatePicker } from './hooks';
import { DatePickerProps, DateValue } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/date-picker.scss';

export const DatePicker = forwardRef(
  (props: DatePickerProps, ref: Ref<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultDatePickerProps);

    const {
      classes,
      styles,
      value,
      handleSelect,
      handleInputChange,
      visible,
      handleVisibleChange,
      mode,
      size,
      formatCalendarValue,
      handleInputBlur,
      inputValue,
      handleInputKeyDown,
    } = useDatePicker(propsWithDefault);

    const { locale } = useConfig();

    const placeholder =
      propsWithDefault.placeholder ||
      (translate(locale.datePicker.placeholder.date) as string);

    return (
      <Popup
        visible={visible}
        content={
          <Calendar
            type={mode}
            value={formatCalendarValue(value)}
            onChange={(value, context) => {
              handleSelect(value as DateValue, context);
            }}
          />
        }
        trigger="focus"
        placement="bottom-start"
        onVisibleChange={handleVisibleChange}
      >
        <div className={classes} style={styles} ref={ref}>
          <Input
            size={size}
            placeholder={placeholder}
            value={inputValue}
            suffix={<Calendar2Line />}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            clearable
          />
        </div>
      </Popup>
    );
  },
);

DatePicker.displayName = 'DatePicker';
