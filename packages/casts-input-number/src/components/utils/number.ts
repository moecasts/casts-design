import { isNumber, isValueEmpty } from '@casts/common';
import {
  addDependencies,
  create,
  formatDependencies,
  FormatOptions,
  subtractDependencies,
} from 'mathjs';

const math = create({
  addDependencies,
  formatDependencies,
  subtractDependencies,
});

// const NUMERIC_PRECISION = 14;

const formatOptions: FormatOptions = {
  // precision: NUMERIC_PRECISION,
  notation: 'fixed',
};

export const add = (a: number, b: number) =>
  math.format(math.add(a, b), formatOptions);

export const subtract = (a: number, b: number) =>
  math.format(math.subtract(a, b), formatOptions);

export const isLegalNumber = (
  value: number | string | undefined,
): value is number =>
  !(
    !isValueEmpty(value) &&
    isNaN(value as unknown as number) &&
    String(value) !== '-'
  );

export const formatNumber = (
  value: number | string,
  options: {
    decimal?: number;
    min?: number;
    max?: number;
  } = {},
) => {
  const { decimal, min, max } = options;

  let newValue = Number(value);

  if (isNumber(decimal)) {
    newValue = Number(newValue.toFixed(decimal));
  }

  if (isNumber(min)) {
    newValue = Math.max(newValue, min);
  }

  if (isNumber(max)) {
    newValue = Math.min(newValue, max);
  }

  return newValue;
};

export const isDecimalOverflow = (value: number | string, decimal: number) => {
  const [_, decimals = ''] = String(value).split('.');
  const decimalsCount = decimals.length || 0;
  return decimalsCount > decimal;
};
