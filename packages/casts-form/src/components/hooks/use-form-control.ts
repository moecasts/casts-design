import { CSSProperties, useMemo } from 'react';
import { groupBy, isString, mapValues, omitBy, some } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { translate } from '@casts/locale';
import clsx from 'clsx';
import { RegisterOptions } from 'react-hook-form';

import { useFormContext } from '../form-context';
import { UseFormItemProsp, ValueType } from '../types';
import { getValidateObject } from '../utils';

const defaultValidateStatus = 'error';

export const useFormControl = (props: UseFormItemProsp) => {
  const { className, name, label, rules } = props;

  const { getPrefixCls, locale } = useConfig();

  const { layout, labelWidth } = useFormContext();

  const isHorizontal = layout === 'horizontal';

  /* --------------------------------- Classes ---------------------------------------- */
  const prefixCls = getPrefixCls('form-item');
  const controlClasses = clsx(`${prefixCls}-control`, className);

  const controlContentClasses = clsx(`${prefixCls}-control-content`, className);
  const helpClasses = clsx(`${prefixCls}-help`);
  const extraClasses = clsx(`${prefixCls}-extra`);

  /* --------------------------------- Styless ---------------------------------------- */
  const controlStyles: CSSProperties = omitBy(
    {
      marginLeft: isHorizontal && labelWidth,
    } as CSSProperties,
    (value) => !value,
  );

  /* --------------------------------- validate ---------------------------------------- */
  const validate = useMemo(() => {
    const groups = groupBy(
      rules,
      (rule) => rule.status || defaultValidateStatus,
    );

    return mapValues(
      groups,
      (group) => (value: ValueType, formValues: ValueType[]) => {
        let message: string | undefined = undefined;

        some(group, (rule) => {
          const validateObject = getValidateObject(rule);
          if (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            !validateObject?.func(value, formValues as any) &&
            validateObject?.type
          ) {
            message =
              rule.message ||
              // @ts-ignore
              (translate(locale.form.errorMessage[validateObject.type], {
                name: isString(label) ? label : String(name),
                validate: rule[validateObject.type] as unknown as string,
              }) as string);
            return true;
          }

          return false;
        });

        return message;
      },
    ) as unknown as RegisterOptions['validate'];
  }, [label, locale.form.errorMessage, name, rules]);

  return {
    controlClasses,
    controlStyles,
    controlContentClasses,
    extraClasses,
    helpClasses,

    validate,
  };
};
