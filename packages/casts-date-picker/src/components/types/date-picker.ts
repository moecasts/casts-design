import { BaseComponentProps } from '@casts/common';

export type UseDatePickerProps = BaseComponentProps & {
  value?: string | [string, string];
};

export type DatePickerProps = UseDatePickerProps;
