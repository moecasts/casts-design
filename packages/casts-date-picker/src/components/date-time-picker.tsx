import { CSSProperties, forwardRef, Ref, useMemo } from 'react';
import { BaseComponentProps, range, useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Calendar2Line } from '@casts/icons';
import { Input } from '@casts/input';
import { translate } from '@casts/locale';
import { Popup } from '@casts/popup';
import { clsx } from 'clsx';

import { Calendar } from './calendar';
import { useDateTimePicker } from './hooks';
import { BaseDatePickerProps, DateValue } from './types';

import './styles/time-picker-panel.scss';
import './styles/date-time-picker.scss';

export type UseTimePickerPanelProps = BaseComponentProps;

export type TimePickerPanelProps = UseTimePickerPanelProps;

export const useTimePickerPanel = (props: UseTimePickerPanelProps) => {
  const { className, style, ...rest } = props;
  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('time-picker-panel');

  const classes = clsx(prefixCls, className);

  const styles: CSSProperties = { ...style };

  const generateColumns = () => {
    return [
      range(0, 24).map((hour) => hour.toFixed().padStart(2, '0')),
      range(0, 60).map((minute) => minute.toFixed().padStart(2, '0')),
      range(0, 60).map((second) => second.toFixed().padStart(2, '0')),
    ];
  };

  const columns = useMemo(() => generateColumns(), []);

  const headerClasses = `${prefixCls}-header`;

  const bodyClasses = `${prefixCls}-body`;

  const columnClasses = `${prefixCls}-column`;
  const columnMaskClasses = `${prefixCls}-column-mask`;

  const cellClasses = `${prefixCls}-cell`;

  return {
    ...rest,
    classes,
    columnClasses,
    columnMaskClasses,

    cellClasses,
    headerClasses,
    bodyClasses,
    styles,
    columns,
  };
};

export const TimePickerPanel = forwardRef(
  (props: TimePickerPanelProps, ref: Ref<HTMLDivElement>) => {
    const {
      classes,
      styles,
      columns,
      columnClasses,
      cellClasses,
      headerClasses,
      bodyClasses,
      columnMaskClasses,
    } = useTimePickerPanel(props);

    return (
      <div ref={ref} className={classes} style={styles}>
        <div className={headerClasses}>
          <span>Hour</span>
        </div>
        <div className={bodyClasses}>
          <div className={columnMaskClasses}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {columns.map((column, index) => (
            <ul className={columnClasses} key={index}>
              {column.map((cell) => {
                return (
                  <li className={cellClasses} key={cell}>
                    {cell}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    );
  },
);

TimePickerPanel.displayName = 'TimePickerPanel';

export type DateTimePickerProps = BaseDatePickerProps;

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
    } = useDateTimePicker(propsWithDefault);

    const { locale } = useConfig();

    const placeholder =
      propsWithDefault.placeholder ||
      (translate(locale.datePicker.placeholder.date) as string);

    return (
      <Popup
        visible={visible || true}
        className={popupClasses}
        content={
          <div className={panelClasses}>
            <Calendar
              className={panelDateClasses}
              type={mode}
              value={value as Exclude<DateValue, 'DateRange'>}
              onChange={(value, context) => {
                handleSelect(value, context);
              }}
              renderFooter={() => null}
            />
            <TimePickerPanel className={panelTimeClasses} />
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
