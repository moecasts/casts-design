import { BaseComponentProps } from '@casts/common';

import { SelectValue } from './select';

export type UseSelectOptionProps = BaseComponentProps & {
  value: SelectValue;

  selected?: boolean;
};

export type SelectOptionProps = UseSelectOptionProps;
