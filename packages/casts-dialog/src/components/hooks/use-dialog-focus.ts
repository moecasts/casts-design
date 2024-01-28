import { RefObject, useEffect, useRef } from 'react';

import { TDialogInstance, UseDialogFocusProps } from '../types';

const dialogSet = new Set<RefObject<HTMLElement>>();

const dialogInstanceSet = new Set<RefObject<TDialogInstance>>();

export const useDialogFocus = (props: UseDialogFocusProps) => {
  const { open, dialogRef, single, show, hide } = props;

  /** auto focus the open dialog */
  useEffect(() => {
    if (open) {
      if (dialogRef.current) {
        dialogSet.add(dialogRef);
        requestAnimationFrame(() => dialogRef.current?.focus());
      }
    } else if (dialogSet.has(dialogRef)) {
      // if the dialog is not open, delete the dialog from set and focus the last dialog in the set
      dialogSet.delete(dialogRef);
      const dialogLast = Array.from(dialogSet).pop();
      requestAnimationFrame(() => dialogLast?.current?.focus());
    }

    return () => {
      // clear invalid dialog
      dialogSet.forEach((item) => {
        if (!item.current) {
          dialogSet.delete(item);
        }
      });
    };
  }, [open, dialogRef]);

  const dialogInstance = useRef<TDialogInstance>({
    show,
    hide,
  });

  /** Ensure that only one dialog is opened at a time */
  const ensureOnlyOneDialogOpened = (open?: boolean) => {
    const dialogInstanceLast = Array.from(dialogInstanceSet).pop();
    const isDialogSetLast = dialogInstanceLast === dialogInstance;

    if (open) {
      if (!dialogInstanceSet.has(dialogInstance)) {
        dialogInstanceSet.add(dialogInstance);
      }

      // auto hide previous dialog when new dialog opened
      !isDialogSetLast && dialogInstanceLast?.current?.hide();
    } else {
      if (isDialogSetLast) {
        // current dialog hid, so delete it from the set
        dialogInstanceSet.delete(dialogInstance);
        const dialogPrev = Array.from(dialogInstanceSet).pop();
        dialogPrev?.current?.show();
      }
    }
  };

  useEffect(() => {
    if (!single) {
      return;
    }

    ensureOnlyOneDialogOpened(open);
  }, [open, single]);
};
