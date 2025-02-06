import { useFieldArray, UseFieldArrayReturn } from 'react-hook-form';

import { useFormContext } from '../form-context';
import { UseFormListProps } from '../types';

export const useFormList = (props: UseFormListProps) => {
  const { name } = props;
  const { control } = useFormContext();

  const { fields: baseFields, ...baseOperation } = useFieldArray({
    name,
    control,
  });

  const operation: Omit<UseFieldArrayReturn, 'fields'> = {
    ...baseOperation,
  };

  const fields = baseFields.map((field) => ({ ...field, name }));

  return {
    fields,
    operation,
  };
};
