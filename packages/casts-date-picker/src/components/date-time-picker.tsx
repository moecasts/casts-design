import { forwardRef, Ref } from 'react';
import { useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Calendar2Line } from '@casts/icons';
import { Input } from '@casts/input';
import { translate } from '@casts/locale';
import { Popup } from '@casts/popup';

import { Calendar } from './calendar';
import { useDateTimePicker } from './hooks';
import { TimePickerPanel } from './time-picker-panel';
import { DateTimePickerProps, DateValue } from './types';

import './styles/time-picker-panel.scss';
import './styles/date-time-picker.scss';

export const DateTimePicker = forwardRef(
  (props: DateTimePickerProps, ref: Ref<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(props, {});

    const {
      classes,
      styles,
      value,
      handleSelect,
      visible,
      handleVisibleChange,
      mode,
      size,
      popupClasses,
      panelClasses,
      panelDateClasses,
      panelTimeClasses,
      handleTimeChange,
      formatTimeValue,
      formatCalendarValue,
      inputValue,
      handleInputChange,
      handleInputBlur,
      handleInputKeyDown,
    } = useDateTimePicker(propsWithDefault);

    const { locale } = useConfig();

    const placeholder =
      propsWithDefault.placeholder ||
      (translate(locale.datePicker.placeholder.date) as string);

    return (
      <Popup
        visible={visible}
        className={popupClasses}
        content={
          <div className={panelClasses}>
            <Calendar
              className={panelDateClasses}
              type={mode}
              value={formatCalendarValue(value)}
              onChange={(value, context) => {
                handleSelect(value as DateValue, context);
              }}
              renderFooter={() => null}
            />
            <TimePickerPanel
              value={formatTimeValue(value)}
              className={panelTimeClasses}
              onChange={handleTimeChange}
            />
          </div>
        }
        trigger="focus"
        placement="bottom-start"
        onVisibleChange={handleVisibleChange}
      >
        <div className={classes} style={styles} ref={ref}>
          <Input
            size={size}
            placeholder={placeholder}
            clearable
            suffix={<Calendar2Line />}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
          />
        </div>
      </Popup>
    );
  },
);

DateTimePicker.displayName = 'DateTimePicker';
