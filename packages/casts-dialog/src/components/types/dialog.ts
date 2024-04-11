import { UseDialogProps } from './use-dialog';
import { UseDialogClassesProps } from './use-dialog-classes';
import { UseDialogNodeProps } from './use-dialog-node';

export type DialogProps = Omit<
  UseDialogProps & UseDialogClassesProps & UseDialogNodeProps,
  'getPrefixCls'
>;

export type DialogInstance = {
  /** show dialog */
  show: () => void;

  /** hide dialog */
  hide: () => void;

  /** destroy dialog */
  destroy: () => void;

  /** update dialog props */
  update: (props: DialogProps) => void;
};
