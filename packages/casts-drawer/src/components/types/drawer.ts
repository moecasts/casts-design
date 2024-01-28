import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

export enum ChangeTriggerEnum {
  MASK = 'mask',
  CLOSE = 'close',
  CANCEL = 'cancel',
  CONFIRM = 'confirm',
  CUSTOM = 'custom',
  ESC = 'esc',
  ENTER = 'enter',
  INTERNAL = 'internal',
}

export enum DrawerPlacement {
  Top = 'top',
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
}

export type UseDrawerProps = BaseComponentProps & {
  /**
   * drawer placement
   * @default right
   */
  placement?: `${DrawerPlacement}`;

  visible?: boolean;

  closeable?: boolean;

  defaultVisible?: boolean;

  onChange?: (
    visible: boolean,
    context: {
      e: MouseEvent;
      trigger: ChangeTriggerEnum;
    },
  ) => void;

  closeOnMaskClick?: boolean;

  closeOnEscKeydown?: boolean;

  header?: ReactNode;

  footer?: ReactNode;

  /**
   * disable body scroll when drawer is visible
   * @default true
   */
  preventScrollThroughWhenVisible?: boolean;
};

export type DrawerProps = UseDrawerProps & {
  mask?: boolean;

  destroyOnClose?: boolean;
};
