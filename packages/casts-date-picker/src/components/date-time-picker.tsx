import {
  CSSProperties,
  forwardRef,
  Ref,
  UIEvent,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  BaseComponentProps,
  range,
  useDebounceFn,
  useDefaultProps,
} from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Calendar2Line } from '@casts/icons';
import { Input } from '@casts/input';
import { translate } from '@casts/locale';
import { Popup } from '@casts/popup';
import { clsx } from 'clsx';
import { format } from 'date-fns';

import { Calendar } from './calendar';
import { useDateTimePicker } from './hooks';
import { BaseDatePickerProps, DateValue } from './types';

import './styles/time-picker-panel.scss';
import './styles/date-time-picker.scss';

export type UseTimePickerPanelProps = BaseComponentProps & {
  /**
   * default value is `HH:mm:ss`
   * eg:
   *   23:59:59
   */
  format?: (value: string) => string;
};

export type TimePickerPanelProps = UseTimePickerPanelProps;

const ITEM_HEIGHT = 32 + 2;

export const useTimePickerPanel = (props: UseTimePickerPanelProps) => {
  const { className, style, ...rest } = props;
  const { getPrefixCls } = useConfig();

  const formatA = true;

  // const [value, setValue] = useControlled(props, 'value', noop);

  const prefixCls = getPrefixCls('time-picker-panel');

  const classes = clsx(prefixCls, className);

  const styles: CSSProperties = { ...style };

  const generateColumns = () => {
    return [
      formatA && ['AM', 'PM'],
      range(0, 24).map((hour) => hour.toFixed().padStart(2, '0')),
      range(0, 60).map((minute) => minute.toFixed().padStart(2, '0')),
      range(0, 60).map((second) => second.toFixed().padStart(2, '0')),
    ].filter(Boolean);
  };

  const columns = useMemo(() => generateColumns(), []);

  const [segments, setSegments] = useState(() =>
    columns.map((column) => column[0]),
  );

  const columnRefs = useRef<Record<number, HTMLElement>>({});

  const headerClasses = `${prefixCls}-header`;

  const bodyClasses = `${prefixCls}-body`;

  const columnClasses = `${prefixCls}-column`;
  const columnMaskClasses = `${prefixCls}-column-mask`;

  const getCellClasses = (column: number, current: string) => {
    const cellClasses = clsx(`${prefixCls}-cell`, {
      [`${prefixCls}-cell--selected`]: segments[column] === current,
    });

    return cellClasses;
  };

  const handleCellClick = (payload: { segment: number; current: number }) => {
    const { segment, current } = payload;
    const container = columnRefs.current[segment];

    const distance = current * ITEM_HEIGHT;

    container.scrollTo({
      top: distance,
      behavior: 'smooth',
    });
  };

  const handleColumnScroll = useDebounceFn(
    (segment: number, e: UIEvent<HTMLElement>) => {
      const snapToCell = (e: UIEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;

        const distance =
          Math.round(target.scrollTop / ITEM_HEIGHT) * ITEM_HEIGHT;

        const newSegments = [...segments];

        const current = distance / ITEM_HEIGHT;

        const item = columns[segment][current];

        newSegments[segment] = item;

        setSegments(newSegments);

        target.scrollTo({
          top: distance,
          behavior: 'smooth',
        });
      };

      snapToCell(e);
    },
    { wait: 50 },
  );

  const valueDisplay = useMemo(() => {
    const timeSegments = (
      formatA ? [segments[1], ...segments.slice(2)] : segments.slice(1)
    ).map((segment) => parseInt(segment, 10));

    const time = format(new Date(0, 0, 0, ...timeSegments), 'B HH:mm:ss');

    return props.format ? props.format(time) : time;
  }, [props.format, segments]);

  return {
    ...rest,

    columnRefs,

    classes,
    columnClasses,
    columnMaskClasses,

    headerClasses,
    bodyClasses,
    styles,
    columns,

    handleCellClick,

    handleColumnScroll,

    getCellClasses,

    valueDisplay,
  };
};

export const TimePickerPanel = forwardRef(
  (props: TimePickerPanelProps, ref: Ref<HTMLDivElement>) => {
    const {
      classes,
      styles,
      columns,
      columnClasses,
      getCellClasses,
      headerClasses,
      bodyClasses,
      columnMaskClasses,
      handleColumnScroll,
      handleCellClick,
      columnRefs,
      valueDisplay,
    } = useTimePickerPanel(props);

    return (
      <div ref={ref} className={classes} style={styles}>
        <div className={headerClasses}>
          <span>{valueDisplay}</span>
        </div>
        <div className={bodyClasses}>
          <div className={columnMaskClasses}>
            {columns.map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
          {columns.map((column, index) => (
            <ul
              ref={(el) => {
                columnRefs.current[index] = el as HTMLElement;
              }}
              className={columnClasses}
              key={index}
              onScroll={(e) => handleColumnScroll.run(index, e)}
            >
              {column.map((cell, current) => {
                return (
                  <li
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="button"
                    className={getCellClasses(index, cell)}
                    key={cell}
                    onClick={() => {
                      handleCellClick({
                        segment: index,
                        current,
                      });
                    }}
                    onKeyDown={() => {
                      handleCellClick({
                        segment: index,
                        current,
                      });
                    }}
                    tabIndex={0}
                  >
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
