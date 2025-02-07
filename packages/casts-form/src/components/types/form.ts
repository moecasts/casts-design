import { BaseComponentProps } from '@casts/common';
import { SubmitHandler } from 'react-hook-form';

export type UseFormProps = Omit<BaseComponentProps, 'children'> & BaseFormProps;

export type FormProps = BaseComponentProps & UseFormProps;

export type BaseFormProps = {
  /** The layout of fields */
  layout?: 'inline' | 'horizontal' | 'vertical';

  /** Width of field's label */
  labelWidth?: string;

  /**
   * Whether to display a colon to the right of the form label field
   * @default false
   */
  colon?: boolean;

  /** Whether to show the required */
  required?: boolean;

  /** Text-align value of label (only works when `layout="horizontal"`) */
  labelAlign?: 'right' | 'left';

  /** Callback invoked after clicked on submit button or executed formApi.submit(), and all validation pass. */
  onSubmit?: SubmitHandler<Record<string, any>>;
};
