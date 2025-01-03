import { forwardRef, Ref } from 'react';
import { useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Calendar2Line } from '@casts/icons';
import { translate } from '@casts/locale';
import { Popup } from '@casts/popup';
import { RangeInput } from '@casts/range-input';
import { DateRange } from 'react-day-picker';

import { Calendar } from './calendar';
import { useDateTimeRangePicker } from './hooks';
import { TimePickerPanel } from './time-picker-panel';
import { UseDateTimeRangePickerProps } from './types';

import './styles/time-picker-panel.scss';
import './styles/date-time-range-picker.scss';

export type DateTimeRangePickerProps = UseDateTimeRangePickerProps;

export const DateTimeRangePicker = forwardRef(
  (props: DateTimeRangePickerProps, ref: Ref<HTMLDivElement>) => {
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
    } = useDateTimeRangePicker(propsWithDefault);

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
              type={'range'}
              value={value}
              onChange={(value, context) => {
                handleSelect(value as DateRange, context);
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
          <RangeInput
            size={size}
            placeholder={placeholder}
            value={formatValue(value as any) as any}
            clearable
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

DateTimeRangePicker.displayName = 'DateTimeRangePicker';
