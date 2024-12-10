import {
  CSSProperties,
  UIEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  BaseComponentProps,
  noop,
  range,
  useControlled,
  useDebounceFn,
} from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';
import { format } from 'date-fns';

import { TimeValue } from '../types';

/**
 * default format is `HH:mm:ss`
 */
export type UseTimePickerPanelProps = BaseComponentProps & {
  /**
   * time value
   */
  value?: TimeValue;

  /**
   * default time value
   */
  defaultValue?: TimeValue;

  /**
   * callback when time change
   */
  onChange?: (value: TimeValue) => void;

  /**
   * default value is `HH:mm:ss`
   * eg:
   *   23:59:59
   */
  format?: (value: string) => string;
};

const ITEM_HEIGHT = 32 + 2;

export const useTimePickerPanel = (props: UseTimePickerPanelProps) => {
  const { className, style, onChange = noop, ...rest } = props;
  const { getPrefixCls } = useConfig();

  const formatA = true && false;

  const TIME_FORMAT = formatA ? 'B HH:mm:ss' : 'HH:mm:ss';

  const [value, setValue] = useControlled(props, 'value', onChange);

  useEffect(() => {
    console.log('debug1 value', { value, pV: props.value });
  }, [value, props.value]);

  const prefixCls = getPrefixCls('time-picker-panel');

  const classes = clsx(prefixCls, className);

  const styles: CSSProperties = { ...style };

  const generateColumns = () => {
    return [
      formatA && ['AM', 'PM'],
      range(0, 24).map((hour) => hour.toFixed().padStart(2, '0')),
      range(0, 60).map((minute) => minute.toFixed().padStart(2, '0')),
      range(0, 60).map((second) => second.toFixed().padStart(2, '0')),
    ].filter(Boolean) as string[][];
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
      [`${prefixCls}-cell--selected`]: value && segments[column] === current,
    });

    return cellClasses;
  };

  const handleChange = (segments: string[]) => {
    setValue(segments.join(':'));
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
        handleChange(newSegments);

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
      formatA ? [segments[1], ...segments.slice(2)] : segments.slice(0)
    ).map((segment) => parseInt(segment, 10));

    const time = format(new Date(0, 0, 0, ...timeSegments), TIME_FORMAT);

    return props.format ? props.format(time) : time;
  }, [props.format, segments]);

  return {
    ...rest,

    value,

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

    handleChange,
  };
};
