import toast, {
  ToastOptions,
  ToastPosition,
  Renderable,
} from 'react-hot-toast';
import { MessageProps } from './components/types';
import { ReactNode } from 'react';
import { createToastContainerIfNotExists } from '@casts/toast';
import { Message } from './components/message';

type MessageFunctionOptions = Omit<MessageProps, 'content'> &
  ToastOptions & {
    position?: ToastPosition;
  };

const DEFAULT_POSITION = 'top-center';

const DEFAULT_DURATION = 3000;

const createMessage = (
  type: string,
  content: ReactNode,
  options: MessageFunctionOptions = {},
) => {
  createToastContainerIfNotExists('cds-toast-root');
  const {
    position = DEFAULT_POSITION,
    duration = DEFAULT_DURATION,
    ...props
  } = options;
  const toastOptions = {
    position,
    duration: props.close || duration === 0 ? Infinity : duration,
    Component: Message,
    props: {
      ...props,
      theme: type,
    },
  };
  const id = toast(content as Renderable, toastOptions);
  return id;
};

const createMessagePromise = (
  promise: Promise<unknown>,
  msgs: Record<string, ReactNode>,
  options: MessageFunctionOptions = {},
) => {
  createToastContainerIfNotExists('cds-toast-root');
  const { position = DEFAULT_POSITION, duration, ...props } = options;
  const toastOptions = {
    position,
    duration: props.close ? Infinity : duration,
    Component: Message,
    props,
    promise: true,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
