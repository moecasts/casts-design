import { BaseComponentProps } from '@casts/common';

export type UseDropdownItemProps = BaseComponentProps & {
  value: any;

  hasChildren?: boolean;
};

export type DropdownItemProps = UseDropdownItemProps;
