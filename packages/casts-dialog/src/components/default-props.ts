import { DialogProps } from './types';

export const defaultDialogProps = {
  maskless: false,
  destroyOnClose: true,
  centered: true,
  closeable: true,
  keyboard: true,
} satisfies Partial<DialogProps>;
