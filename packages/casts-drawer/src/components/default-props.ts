import { DrawerProps } from './types';

export const defaultDrawerProps: Partial<DrawerProps> = {
  placement: 'right',

  mask: true,

  closeable: false,

  closeOnMaskClick: true,

  closeOnEscKeydown: true,

  destroyOnClose: false,

  preventScrollThroughWhenVisible: false,
};
