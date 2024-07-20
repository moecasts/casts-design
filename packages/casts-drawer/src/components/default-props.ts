import { DrawerProps } from './types';

export const defaultDrawerProps = {
  placement: 'right',

  mask: true,

  closeable: false,

  closeOnMaskClick: true,

  closeOnEscKeydown: true,

  destroyOnClose: false,

  preventScrollThroughWhenVisible: false,
} satisfies Partial<DrawerProps>;
