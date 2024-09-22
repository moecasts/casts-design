import { BaseComponentProps } from '@casts/common';

export enum DatePickerMode {
  Single = 'single',
  Multiple = 'multiple',
  Range = 'range',
}

export type DatePickerValue = string | string[];

export type UseDatePickerProps = BaseComponentProps & {
  value?: DatePickerValue;

  mode?: `${DatePickerMode}`;

  onChange?: (value: DatePickerValue) => void;
};

export type DatePickerProps = UseDatePickerProps;
