import {
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react';
import { BaseComponentProps, WithRequired } from '@casts/common';

import { UseDialogCardClassesProps } from './use-dialog-card-classes';
import { UseDialogClassesProps } from './use-dialog-classes';

export type Open = boolean;

export enum OpenChangeTriggerEnum {
  MASK = 'mask',
  CLOSE = 'close',
  CANCEL = 'cancel',
  CONFIRM = 'confirm',
  CUSTOM = 'custom',
  ESC = 'esc',
  ENTER = 'enter',
  INTERNAL = 'internal',
}

export type OpenChangeTrigger = `${OpenChangeTriggerEnum}`;

export type ContextEvent = MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>;

export type OpenChangeHandler = (
  open: Open,
  context: { e?: ContextEvent; trigger?: OpenChangeTrigger },
) => void;

export type UseDialogProps = Omit<HTMLAttributes<HTMLDivElement>, 'content'> &
  UseDialogClassesProps &
  UseDialogCardClassesProps &
  WithRequired<BaseComponentProps, 'getPrefixCls'> & {
    /**
     * Whether the dialog is open
     */
    open?: Open;

    /**
     * Whether the dialog is default open
     */
    defaultOpen?: Open;

    /**
     * Whether to unmount child components on onClose
     * @default true
     */
    destroyOnClose?: boolean;

    onOpenChange?: OpenChangeHandler;

    /**
     * Specify a function that will be called when a user clicks mask, close button on top right or Cancel button
     */
    onCancel?: OpenChangeHandler;

    /**
     * Specify a function that will be called when a user click Confirm button
     */
    onConfirm?: OpenChangeHandler;

    onOutsideClick?: OpenChangeHandler;

    /**
     * Whether hide the mask
     * @default false
     */
    maskless?: boolean;

    /**
     * Footer content, set as `footer={null}` when you don't need default buttons
     */
    footer?: ReactNode;

    /**
     * Header content, set as `header={null}` when you don't need header
     */
    header?: ReactNode;

    /**
     * Content, same as `children`
     */
    content?: ReactNode;

    /**
     * Dialog title, only works when `header !== null`
     */
    title?: ReactNode;

    /**
     * Whether show close button
     * @default true
     */
    closeable?: boolean;

    /**
     * Whether to allow close by keyboard event Esc
     * @default true
     */
    keyboard?: boolean;

    /**
     * Whether dialog is created by plugin
     */
    isPlugin?: boolean;

    /**
     * Text for confirm button
     */
    confirmText?: string;

    /**
     * Text for cancel button
     */
    cancelText?: string;

    /**
     * Only show single dialog at once time.
     */
    single?: boolean;

    simple?: boolean;

    dialogRef?: RefObject<HTMLDivElement>;
    dialogContainerRef?: RefObject<HTMLDivElement>;
  };
