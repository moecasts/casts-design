import { KeyboardEvent, MouseEvent } from 'react';
import { Size } from '@casts/common';

import { DropdownValue } from './common';

export type DropdownContextValue = {
  open?: boolean;
  size?: Size;
  maxHeight?: string | number;
  minColumnWidth?: string | number;
  maxColumnWidth?: string | number;
  handleClick?: (
    option: DropdownValue,
    context: {
      event: MouseEvent | KeyboardEvent;
    },
  ) => void;
};
