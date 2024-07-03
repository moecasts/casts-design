import { createElement, createRef, Ref } from 'react';
import { isCanUseDocument, render } from '@casts/common';

import { Dialog as DialogComponent } from './dialog';
import { DialogInstance, DialogProps } from './types';

export const createDialogPlugin = (props: DialogProps) => {
  const dialogRef = createRef<DialogInstance>();
  const dialogComponentProps: DialogProps & { ref: Ref<DialogInstance> } = {
    defaultOpen: true,
    destroyOnClose: false,
    isPlugin: true,
    ref: dialogRef,
    ...props,
  };

  if (isCanUseDocument()) {
    const container = document.createDocumentFragment();
    render(createElement(DialogComponent, dialogComponentProps), container);

    const attachRoot = document.body;
    attachRoot.append(container);
  }

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
