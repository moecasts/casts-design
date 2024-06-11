import { createElement, createRef, Ref } from 'react';
import { render } from '@casts/common';

import { Dialog as DialogComponent } from './dialog';
import { DialogInstance, DialogProps } from './types';

export const createDialogPlugin = (props: DialogProps) => {
  const container = document.createDocumentFragment();
  const dialogRef = createRef<DialogInstance>();
  const dialogComponentProps: DialogProps & { ref: Ref<DialogInstance> } = {
    defaultOpen: true,
    destroyOnClose: false,
    isPlugin: true,
    ref: dialogRef,
    ...props,
  };

  const attachRoot = document.body;

  render(createElement(DialogComponent, dialogComponentProps), container);
  attachRoot.append(container);

  const instance: DialogInstance = {
    show: () => {
      dialogRef.current?.show();
    },
    hide: () => {
      dialogRef.current?.hide();
    },
    update: (props: DialogProps) => {
      dialogRef.current?.update(props);
    },
    destroy: () => {
      dialogRef.current?.destroy();
    },
  };

  return instance;
};

export const DialogPlugin = (props: DialogProps) => createDialogPlugin(props);
