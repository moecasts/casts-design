import { HTMLAttributes } from 'react';

import { DialogProps } from './dialog';
import { ContextEvent, OpenChangeTrigger } from './use-dialog';
import { UseDialogCardClassesProps } from './use-dialog-card-classes';

export type DialogCardProps = HTMLAttributes<HTMLDivElement> &
  Omit<
    UseDialogCardClassesProps &
      Pick<
        DialogProps,
        | 'title'
        | 'header'
        | 'closeable'
        | 'content'
        | 'footer'
        | 'isPlugin'
        | 'confirmText'
        | 'cancelText'
      >,
    'getPrefixCls'
  > & {
    onCancel: (e: ContextEvent, trigger?: OpenChangeTrigger) => void;
    onConfirm: (e: ContextEvent, trigger?: OpenChangeTrigger) => void;
  };
