import { BaseComponentProps } from '@casts/common';

import { SelectOption, SelectProps } from './select';

export type UseSelectListProps = BaseComponentProps & {
  virtual?: SelectProps['virtual'];

  onOutsideClick?: (e: Event) => void;

  options?: SelectOption[];
};

export type SelectListProps = UseSelectListProps;
