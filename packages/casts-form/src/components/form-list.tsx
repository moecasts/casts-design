import { forwardRef, Ref, useImperativeHandle } from 'react';
import { log } from '@casts/common';

import { useFormList } from './hooks';
import { FieldOperation, FormListProps } from './types';

export const FormList = forwardRef(
  (props: FormListProps, ref: Ref<FieldOperation>) => {
    const { children } = props;

    const { fields, operation } = useFormList(props);

    useImperativeHandle(ref, () => operation);

    if (typeof children !== 'function') {
      log.error("FormList's children must be a function");
      return null;
    }

    return <>{children(fields, operation)}</>;
  },
);

FormList.displayName = 'FormList';
