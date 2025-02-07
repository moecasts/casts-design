import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';
import { FieldArrayWithId, UseFieldArrayReturn } from 'react-hook-form';

export type UseFormListProps = Omit<BaseComponentProps, 'children'> & {
  /** field name */
  name: string;
};

export type FieldArray = FieldArrayWithId & {
  /** field name */
  name: string;
};

export type FieldOperation = Omit<UseFieldArrayReturn, 'fields'>;

export type FormListProps = Omit<BaseComponentProps, 'children'> &
  UseFormListProps & {
    children: (
      fields: FieldArray[],
      operation: FieldOperation,
    ) => ReactNode | ReactNode[];
  };
