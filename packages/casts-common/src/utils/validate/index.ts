import { isNumber } from 'lodash-es';
import isDate from 'validator/lib/isDate';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';

import { isValueEmpty } from '../is-value-empty';
import { CustomValidator, Value } from './types';

const getTextLength = (text: string) => text.length;

// 比较值大小
const compareValue: (val: Value, num: number, isMax: boolean) => boolean = (
  val,
  num,
  isMax,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const compare: (a: number | any, b: number) => boolean = (a, b) =>
    isMax ? a <= b : a >= b;
  if (isNumber(val)) {
    return compare(val, num);
  }
  if (Array.isArray(val)) {
    return compare(val.length, num);
  }
  return compare(getTextLength(val), num);
};

export const validator = {
  date: isDate,
  url: isURL,
  email: isEmail,
  required: (val: Value): boolean => !isValueEmpty(val),
  whitespace: (val: Value): boolean => !(/^\s+$/.test(val) || val === ''),
  boolean: (val: Value): boolean => typeof val === 'boolean',
  max: (val: Value, num: number): boolean => compareValue(val, num, true),
  min: (val: Value, num: number): boolean => compareValue(val, num, false),
  len: (val: Value, num: number): boolean => getTextLength(val) === num,
  number: (val: Value): boolean => isNumber(val),
  enum: (val: Value, strs: Array<string>): boolean => strs.includes(val),
  idcard: (val: Value): boolean =>
    /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i.test(val),
  telnumber: (val: Value): boolean => /^1[3-9]\d{9}$/.test(val),
  pattern: (val: Value, regexp: RegExp): boolean => regexp.test(val),
  // 自定义校验规则，可能是异步校验
  validator: (
    val: Value,
    validate: CustomValidator,
  ): ReturnType<CustomValidator> => validate(val),
};

export type ValidateFuncType = keyof typeof validator;

export type ValidateFunc = (typeof validator)[ValidateFuncType];
