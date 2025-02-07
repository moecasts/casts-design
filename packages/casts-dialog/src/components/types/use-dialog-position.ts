import { RefObject } from 'react';

import { Open } from './use-dialog';

export type useDialogPositionProps = {
  open: Open;
  dialogRef: RefObject<HTMLDivElement>;
  disabledRef?: RefObject<boolean>;
};
