import toast, { ToastOptions, ToastPosition } from 'react-hot-toast';
import { Message, MessageProps } from '..';
import { ReactNode } from 'react';
import { createToastContainerIfNotExists } from '@casts/toast';

type MessageFunctionOptions = Omit<MessageProps, 'content'> &
  ToastOptions & {
    position?: ToastPosition;
  };

const DEFUALT_POSITION = 'top-center';

const createMessage = (
  type: string,
  content: ReactNode,
  options: MessageFunctionOptions = {},
) => {
  createToastContainerIfNotExists('casts-toast-wrapper');

  const { position = DEFUALT_POSITION, duration, ...props } = options;
  const toastOptions = {
    position,
    duration: props.close ? Infinity : duration,
    Component: Message,
    props: {
      ...props,
      theme: type,
    },
  };
  return toast(content as any, toastOptions);
};

const createMessagePromise = (
  promise: Promise<unknown>,
  msgs: Record<string, ReactNode>,
  options: MessageFunctionOptions = {},
) => {
  createToastContainerIfNotExists('casts-toast-wrapper');
  const { position = DEFUALT_POSITION, duration, ...props } = options;
  const toastOptions = {
    position,
    duration: props.close ? Infinity : duration,
    Component: Message,
    props,
    promise: true,
  };
  return toast.promise(promise, msgs as any, toastOptions);
};

const info = (content: ReactNode, options?: MessageFunctionOptions) =>
  createMessage('info', content, options);
const success = (content: ReactNode, options?: MessageFunctionOptions) =>
  createMessage('success', content, options);
const warning = (content: ReactNode, options?: MessageFunctionOptions) =>
  createMessage('warning', content, options);
const error = (content: ReactNode, options?: MessageFunctionOptions) =>
  createMessage('error', content, options);
const promise = (
  promise: Promise<unknown>,
  msgs: Record<string, ReactNode>,
  options?: MessageFunctionOptions,
) => createMessagePromise(promise, msgs, options);
const closeAll = () => toast.dismiss();

export const message = {
  info,
  success,
  warning,
  error,
  promise,
  closeAll,
};
