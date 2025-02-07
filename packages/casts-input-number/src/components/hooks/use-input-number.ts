import { CSSProperties, FocusEventHandler, useMemo } from 'react';
import {
  isNumber,
  isUndefined,
  isValueEmpty,
  noop,
  useControlled,
} from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { defaultInputNumberProps } from '../default-props';
import {
  ChangeEventHandler,
  InputNumberValue,
  UseInputNumberProps,
} from '../types';
import {
  add,
  formatNumber,
  isDecimalOverflow,
  isLegalNumber,
  subtract,
} from '../utils';

export const useInputNumber = (props: UseInputNumberProps) => {
  const {
    className,
    style,
    onChange = noop,
    step = defaultInputNumberProps.step,
    decimal,
    onBlur,
    min,
    max,
    ...rest
  } = props;
  const { getPrefixCls } = useConfig();

  /* --------------------------------- classes and style ---------------------------------------- */
  const prefixCls = getPrefixCls('input-number');

  const classes = clsx(prefixCls, className);

  const styles: CSSProperties = { ...style };

  const handlerClasses = `${prefixCls}-handler`;

  /* --------------------------------- states ---------------------------------------- */
  /**
   * Safe change event handler to prevent illegal number
   */
  const safeOnChange: ChangeEventHandler = (value, context = {}) => {
    if (!isLegalNumber(value)) {
      return;
    }

    const getValue = (value: InputNumberValue) => {
      if (String(value) === '-') {
        return value;
      }

      return isValueEmpty(value) ? undefined : Number(value);
    };

    const newValue = getValue(value);

    if (isNumber(max) && isNumber(newValue) && newValue > max) {
      return;
    }

    if (isNumber(min) && isNumber(newValue) && newValue < min) {
      return;
    }

    if (
      isNumber(decimal) &&
      isNumber(newValue) &&
      isDecimalOverflow(value, decimal)
    ) {
      return;
    }

    onChange?.(newValue, context);
  };

  const [value, setValue] = useControlled(props, 'value', safeOnChange);

  const aboveMaxValue =
    isNumber(max) && !isValueEmpty(value) && Number(value) >= max;
  const belowMinValue =
    isNumber(min) && !isValueEmpty(value) && Number(value) <= min;

  const overRangeValue = useMemo(() => {
    return (
      (isNumber(decimal) && isDecimalOverflow(value, decimal)) ||
      (isNumber(max) && !isValueEmpty(value) && Number(value) > max) ||
      (isNumber(min) && !isValueEmpty(value) && Number(value) < min)
    );
  }, [value, decimal, max, min]);

  /* --------------------------------- events ---------------------------------------- */
  const handleChange: ChangeEventHandler = (value, context = {}) => {
    if (!isLegalNumber(value)) {
      return;
    }

    const newValue = value;

    setValue(newValue, context);
  };

  const handleIncrease = () => {
    if (isNumber(max) && !isValueEmpty(value) && Number(value) >= max) {
      return;
    }

    const newValue = add(
      Number(value || 0),
      step,
    ) as unknown as InputNumberValue;

    handleChange(newValue, {});
  };

  const handleDecrease = () => {
    if (isNumber(min) && !isValueEmpty(value) && Number(value) <= min) {
      return;
    }

    const newValue = subtract(
      Number(value || 0),
      step,
    ) as unknown as InputNumberValue;
    handleChange(newValue, {});
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur?.(e);

    // format value if it's overflow
    if (isUndefined(value)) {
      return;
    }

    const newValue = String(
      formatNumber(value, { decimal, min, max }),
    ) as unknown as InputNumberValue;

    if (value !== newValue) {
      handleChange(newValue, {});
    }
  };

  return {
    ...rest,
    classes,
    styles,
    value,

    aboveMaxValue,
    belowMinValue,
    overRangeValue,

    handlerClasses,

    handleChange,

    handleIncrease,
    handleDecrease,

    handleBlur,
  };
};
