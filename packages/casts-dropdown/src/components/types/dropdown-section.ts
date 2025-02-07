import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

export type UseDropdownSectionProps = BaseComponentProps & {
  /**
   * The label of the dropdown section.
   */
  label: ReactNode;
};

export type DropdownSectionProps = UseDropdownSectionProps;
