import { forwardRef, Ref } from 'react';
import { useDefaultProps } from '@casts/common';
import { Calendar2Line } from '@casts/icons';
import { Popup } from '@casts/popup';
import { RangeInput } from '@casts/range-input';

import { Calendar } from './calendar';
import { defaultDateRangePickerProps } from './default-props';
import { useDateRangePicker } from './hooks';
import { DateRange, DateRangePickerProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/date-range-picker.scss';

export const DateRangePicker = forwardRef(
  (props: DateRangePickerProps, ref: Ref<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(
      props,
      defaultDateRangePickerProps,
    );

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
      placeholder,
      size,
    } = useDateRangePicker(propsWithDefault);

    return (
      <Popup
        visible={visible}
        content={
          <Calendar
            type={'range'}
            value={value}
            onChange={(value, context) => {
              handleSelect(value as DateRange, context);
            }}
          />
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

DateRangePicker.displayName = 'DateRangePicker';
