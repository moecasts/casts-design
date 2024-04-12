import { RefObject } from 'react';

import { DialogInstance } from './dialog';
import { UseDialogProps } from './use-dialog';

export type TDialogInstance = Pick<DialogInstance, 'hide' | 'show'>;

export type UseDialogFocusProps = TDialogInstance & {
  open?: UseDialogProps['open'];

  single?: UseDialogProps['single'];

  dialogRef: RefObject<HTMLElement>;
};
