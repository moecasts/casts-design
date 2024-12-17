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
import { DateValue, UseDateTimePickerProps } from './types';

import './styles/time-picker-panel.scss';
import './styles/date-time-picker.scss';

export type DateTimePickerProps = UseDateTimePickerProps;

export const DateTimePicker = forwardRef(
  (props: DateTimePickerProps, ref: Ref<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(props, {});

    const {
      classes,
      styles,
      value,
      handleSelect,
      formatValue,
      clearValue,
      handleInputChange,
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
              value={formatTimeValue(value as any)}
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
            value={formatValue(value as any) as any}
            suffix={<Calendar2Line />}
            onChange={(value, context) => {
              if (context.action === 'clear') {
                clearValue();
                return;
              }

              handleInputChange(value, context);
            }}
          />
        </div>
      </Popup>
    );
  },
);

DateTimePicker.displayName = 'DateTimePicker';
