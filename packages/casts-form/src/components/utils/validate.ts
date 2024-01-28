import {
  isFunction,
  omit,
  some,
  ValidateFunc,
  ValidateFuncType,
  validator,
} from '@casts/common';

import { ValidateRule, ValueType } from '../types';

export type ValidateObject = {
  type: ValidateFuncType;
  func: ValidateFunc;
};

/**
 * get the type and validator function from rule
 *
 * @param {ValidateRule} rule - validate rule
 * @returns {{ type, validator }}
 */
export const getValidateObject = (
  rule: ValidateRule,
): ValidateObject | undefined => {
  if (isFunction(rule.validator)) {
    return {
      type: 'validator',
      func: rule.validator,
    };
  }

  const ruleKeys = Object.keys(omit(rule, ['message', 'validator', 'status']));

  let type: keyof typeof validator | undefined = undefined;
  let validateFunc: ValidateFunc | undefined = undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let validateOption: any;

  some(ruleKeys, (ruleKey) => {
    // @ts-ignore
    validateFunc = validator[ruleKey];
    if (validateFunc) {
      type = ruleKey as keyof typeof validator;
      // @ts-ignore
      validateOption = rule[ruleKey] === true ? undefined : rule[ruleKey];

      return true;
    }

    return false;
  });

  if (!validateFunc || !type) {
    return;
  }

  return {
    type,
    func: (value: ValueType, _formValues: ValueType[]) =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      validateFunc!(value, validateOption),
  };
};
