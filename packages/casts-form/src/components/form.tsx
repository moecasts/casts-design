import { forwardRef, Ref } from 'react';
import { useDefaultProps } from '@casts/common';

import { defaultFormProps } from './default-props';
import { FormProvider } from './form-context';
import { useForm } from './hooks';
import { FormProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/form.scss';

export const Form = forwardRef(
  (props: FormProps, ref: Ref<HTMLFormElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultFormProps);
    const { children, ...rest } = propsWithDefault;
    const { onSubmitHandler, classes, ...methods } = useForm(propsWithDefault);

    return (
      <FormProvider {...methods} {...rest}>
        <form
          ref={ref}
          onSubmit={methods.handleSubmit(onSubmitHandler)}
          onReset={() => methods.reset()}
          className={classes}
        >
          {children}
        </form>
      </FormProvider>
    );
  },
);

Form.displayName = 'Form';
