import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

import { ValidateRule, ValidateStatus } from './common';

export type UseFormControlProps = Omit<BaseComponentProps, 'children'>;

export type FormControlProps = BaseComponentProps & {
  /** field name */
  name?: string;

  /** field label */
  label?: string;

  /** component value prop */
  valuePropName?: string;

  /** field validate rules */
  rules?: ValidateRule[];

  /** field validate status */
  status?: ValidateStatus;

  /** field help content */
  help?: ReactNode;

  /** field extra content */
  extra?: ReactNode;
};
