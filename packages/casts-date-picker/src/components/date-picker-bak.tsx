import { forwardRef, Ref } from 'react';
import { Calendar2Line } from '@casts/icons';
import { Popup } from '@casts/popup';
import { RangeInput } from '@casts/range-input';
import { zhCN } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';

import { getDayPickerComponents } from './day-picker-customize-ui';
import { useDatePicker } from './hooks';
import { DatePickerProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/date-picker.scss';

export const DatePicker = forwardRef(
  (props: DatePickerProps, ref: Ref<HTMLDivElement>) => {
    const {
      classes,
      styles,
      dayPickerClassNames,
      value,
      handleSelect,
      getValue,
      clearValue,
    } = useDatePicker(props);

    return (
      <div className={classes} style={styles} ref={ref}>
        <Popup
          visible
          content={
            <DayPicker
              captionLayout="dropdown"
              locale={zhCN}
              mode="range"
              endMonth={new Date(9999, 11)}
              // mode="range"
              selected={value as any}
              onSelect={handleSelect}
              classNames={dayPickerClassNames}
              fixedWeeks
              components={getDayPickerComponents()}
            />
          }
          trigger="focus"
          placement="bottom-start"
        >
          <RangeInput
            value={getValue(value as any) as any}
            suffix={<Calendar2Line />}
            onChange={(_, { action }) => {
              if (action === 'clear') {
                clearValue();
              }
            }}
          />
        </Popup>
      </div>
    );
  },
);

DatePicker.displayName = 'DatePicker';
