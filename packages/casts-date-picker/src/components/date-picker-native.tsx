import { forwardRef, Ref } from 'react';
import { Calendar2Line } from '@casts/icons';
import { Popup } from '@casts/popup';
import { RangeInput } from '@casts/range-input';

import { Calendar } from './calendar';
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
          content={<Calendar />}
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
