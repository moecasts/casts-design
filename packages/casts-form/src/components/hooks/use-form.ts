import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { SubmitHandler, useForm as useFormHook } from 'react-hook-form';

import type { UseFormProps } from '../types/form';

export const useForm = (props: UseFormProps) => {
  const { layout = 'vertical' } = props;
  const methods = useFormHook();

  const onSubmitHandler: SubmitHandler<Record<string, any>> = (data, event) => {
    props.onSubmit?.(data, event);
  };

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('form');
  const classes = clsx(prefixCls, props.className, {
    [`${prefixCls}--${layout}`]: layout,
  });

  return {
    onSubmitHandler,
    ...methods,
    classes,
  };
};
