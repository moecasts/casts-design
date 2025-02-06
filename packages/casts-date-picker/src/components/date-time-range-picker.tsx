import { forwardRef, Ref } from 'react';
import { useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Calendar2Line } from '@casts/icons';
import { Input } from '@casts/input';
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
      visible,
      handleVisibleChange,
      size,
      popupClasses,
      panelClasses,
      panelDateClasses,
      panelTimeClasses,

      handleTimeChange,
      fromTimeValue,
      toTimeValue,

      timeDisabled,

      rangeInputValue,
      handleInputChange,
      handleInputBlur,
      handleInputKeyDown,
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
              renderFooter={() => (
                <div className={panelTimeClasses}>
                  <Popup
                    content={
                      <TimePickerPanel
                        value={fromTimeValue}
                        onChange={(time) => handleTimeChange(time, 'from')}
                      />
                    }
                    trigger="focus"
                  >
                    <Input value={fromTimeValue} disabled={timeDisabled} />
                  </Popup>
                  <Popup
                    content={
                      <TimePickerPanel
                        value={toTimeValue}
                        onChange={(time) => handleTimeChange(time, 'to')}
                      />
                    }
                    trigger="focus"
                  >
                    <Input value={toTimeValue} disabled={timeDisabled} />
                  </Popup>
                </div>
              )}
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
            clearable
            suffix={<Calendar2Line />}
            value={rangeInputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
          />
        </div>
      </Popup>
    );
  },
);

DateTimeRangePicker.displayName = 'DateTimeRangePicker';
