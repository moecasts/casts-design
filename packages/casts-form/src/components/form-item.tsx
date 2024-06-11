import { forwardRef, Ref } from 'react';

import { useFormContext } from './form-context';
import { FormControl } from './form-control';
import { FormLabel } from './form-label';
import { useFormItem } from './hooks';
import { FormItemProps, ValidateError } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/form-item.scss';

export const FormItem = forwardRef(
  (props: FormItemProps, ref: Ref<HTMLDivElement>) => {
    const { name, children, label, valuePropName = 'value', rules } = props;

    const { formState } = useFormContext();

    const error: ValidateError | undefined = name
      ? (formState.errors[name] as ValidateError)
      : undefined;
    const status = error?.type;

    const { wrapClasses, wrapStyles, contentWrapClasses } = useFormItem({
      ...props,
      status,
    });

    return (
      <div className={wrapClasses} style={wrapStyles} ref={ref}>
        {label && <FormLabel>{label}</FormLabel>}
        <div className={contentWrapClasses}>
          <FormControl
            label={label}
            name={name}
            valuePropName={valuePropName}
            rules={rules}
            status={status}
            extra={error?.message}
          >
            {children}
          </FormControl>
        </div>
      </div>
    );
  },
);

FormItem.displayName = 'FormItem';
