import { BaseComponentProps } from '@casts/common';

import { ValidateRule, ValidateStatus } from './common';

export type UseFormItemProsp = Omit<BaseComponentProps, 'children'> & {
  /** Width of field's label */
  labelWidth?: string;

  /** field name */
  name?: string;

  /** field label */
  label?: string;

  /** field validate rules */
  rules?: ValidateRule[];

  /** field validate status */
  status?: ValidateStatus;
};

export type FormItemProps = BaseComponentProps & {
  /** field name */
  name?: string;

  /** field label */
  label?: string;

  /** component value prop */
  valuePropName?: string;

  /** field validate rules */
  rules?: ValidateRule[];
};
