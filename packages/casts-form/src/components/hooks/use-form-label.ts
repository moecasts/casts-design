import { CSSProperties } from 'react';
import { omitBy } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { useFormContext } from '../form-context';
import { UseFormLabelProps } from '../types';

export const useFormLabel = (props: UseFormLabelProps) => {
  const { getPrefixCls } = useConfig();

  const { layout, labelWidth, required, colon, labelAlign } = useFormContext();

  const isHorizontal = layout === 'horizontal';

  /* --------------------------------- Classes ---------------------------------------- */
  const prefixCls = getPrefixCls('form-item');
  const labelClasses = clsx(`${prefixCls}-label`, props.className, {
    [`${prefixCls}-label--colon`]: colon,
    [`${prefixCls}-label--required`]: required,
    [`${prefixCls}-label--${labelAlign}`]: isHorizontal && labelAlign,
  });

  /* --------------------------------- Styless ---------------------------------------- */
  const labelStyles: CSSProperties = {
    ...omitBy(
      {
        width: isHorizontal && labelWidth,
        position: isHorizontal && 'absolute',
      } as CSSProperties,
      (value) => !value,
    ),
    ...props.style,
  };

  return {
    labelClasses,
    labelStyles,
  };
};
