import { useCallback, useEffect } from 'react';
import { useClickPosition } from '@casts/common';

import { useDialogPositionProps } from '../types';

/** auto set dialog transform origin */
export const useDialogPosition = (props: useDialogPositionProps) => {
  const { open, dialogRef, disabledRef } = props;
  const pos = useClickPosition();

  const setDialogTransformOrigin = useCallback(() => {
    if (
      disabledRef?.current ||
      !open ||
      !pos.current ||
      !dialogRef.current ||
      (pos.current.x === 0 && pos.current.y === 0)
    ) {
      return;
    }

    const originLeft = pos.current.x - dialogRef.current.offsetLeft;
    const originTop = pos.current.y - dialogRef.current.offsetTop;
    dialogRef.current.style.transformOrigin = `${originLeft}px ${originTop}px`;
  }, [open, dialogRef, pos, disabledRef]);

  useEffect(() => {
    // FIX: when dialog is display none at the first, the offsetTop/offsetLeft is 0,
    // so set styles in async to ensure get the dialog's position rightly
    const id = requestAnimationFrame(setDialogTransformOrigin);
    return () => cancelAnimationFrame(id);
  }, [setDialogTransformOrigin]);
};
