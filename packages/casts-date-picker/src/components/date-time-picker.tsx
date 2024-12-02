import {
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  Ref,
  UIEvent,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  BaseComponentProps,
  getKeyboardEvents,
  KEYCODE_CONFIRM,
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
   *  23:99:99
   */
  format?: (value: string) => string;
};

export type TimePickerPanelProps = UseTimePickerPanelProps;

const ITEM_HEIGHT = 32;

export const useTimePickerPanel = (props: UseTimePickerPanelProps) => {
  const { className, style, ...rest } = props;
  const { getPrefixCls } = useConfig();

  // const [value, setValue] = useControlled(props, 'value', noop);

  const columnElementRefs = useRef<(HTMLUListElement | null)[]>([]);

  const [segments, setSegments] = useState([0, 0, 0]);

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

  const cellClasses = clsx(`${prefixCls}-cell`, {});

  const handleColumnScroll = useDebounceFn(
    (segment: number, e: UIEvent<HTMLElement>) => {
      const snapToCell = (e: UIEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;

        const distance =
          Math.round(target.scrollTop / ITEM_HEIGHT) * ITEM_HEIGHT;

        const newSegments = [...segments];

        newSegments[segment] = distance / ITEM_HEIGHT;

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

  const handleCellClick = (payload: {
    column: number;
    segment: number;
    e: MouseEvent<Element> | KeyboardEvent<Element>;
  }) => {
    const { column, segment } = payload;

    const newSegments = [...segments];

    newSegments[column] = segment;

    setSegments(newSegments);

    const columnElement = columnElementRefs.current[column];

    if (!columnElement) {
      return;
    }

    columnElement.scrollTo({
      top: segment * ITEM_HEIGHT,
      behavior: 'smooth',
    });
  };

  const valueDisplay = useMemo(() => {
    const time = format(
      new Date(0, 0, 0, segments[0], segments[1], segments[2]),
      'HH:mm:ss',
    );
    return props.format ? props.format(time) : time;
  }, [segments, props.format]);

  return {
    ...rest,
    valueDisplay,
    columnElementRefs,

    classes,
    columnClasses,
    columnMaskClasses,

    cellClasses,
    headerClasses,
    bodyClasses,
    styles,
    columns,

    handleColumnScroll,
    handleCellClick,
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
      handleColumnScroll,
      handleCellClick,
      columnElementRefs,
      valueDisplay,
    } = useTimePickerPanel(props);

    return (
      <div ref={ref} className={classes} style={styles}>
        <div className={headerClasses}>
          <span>{valueDisplay}</span>
        </div>
        <div className={bodyClasses}>
          <div className={columnMaskClasses}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {columns.map((column, index) => (
            <ul
              className={columnClasses}
              key={index}
              onScroll={(e) => handleColumnScroll.run(index, e)}
              ref={(el) => {
                columnElementRefs.current[index] = el;
              }}
            >
              {column.map((cell) => {
                return (
                  <li
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="button"
                    className={cellClasses}
                    key={cell}
                    onClick={(e) =>
                      handleCellClick({
                        column: index,
                        segment: parseInt(cell),
                        e,
                      })
                    }
                    onKeyPress={getKeyboardEvents([
                      [
                        KEYCODE_CONFIRM,
                        (e) =>
                          handleCellClick({
                            column: index,
                            segment: parseInt(cell),
                            e,
                          }),
                      ],
                    ])}
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
