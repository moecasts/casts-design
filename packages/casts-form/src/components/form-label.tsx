import { forwardRef, Ref } from 'react';

import { useFormLabel } from './hooks';
import { FormLabelProps } from './types';

export const FormLabel = forwardRef(
  (props: FormLabelProps, ref: Ref<HTMLDivElement>) => {
    const { children } = props;

    const { labelClasses, labelStyles } = useFormLabel(props);

    return (
      <div className={labelClasses} style={labelStyles} ref={ref}>
        <label>{children}</label>
      </div>
    );
  },
);

FormLabel.displayName = 'FormLabel';
