import { BaseComponentProps } from '@casts/common';

import { SelectOption, SelectProps, SelectValue } from './select';

export type SelectContextProps = {
  value?: SelectValue | SelectValue[];

  valueDisplay?: SelectValue;

  onChange?: (value: SelectValue | SelectValue[]) => void;

  open: boolean;

  handleOpenChange: (open: boolean) => void;

  isSelected: (value: SelectValue) => boolean;

  multiple?: boolean;
};

export type UseSelectProviderProps = Partial<SelectContextProps> &
  BaseComponentProps & {
    options?: SelectOption[];
  } & Partial<SelectProps>;

export type SelectProviderProps = UseSelectProviderProps;
