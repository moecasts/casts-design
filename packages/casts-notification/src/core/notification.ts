import { Notification, NotificationProps } from '..';
import toast, { ToastOptions, ToastPosition } from 'react-hot-toast';
import { createToastContainerIfNotExists } from '@casts/toast';

type NotificationFunctionOptions = NotificationProps &
  ToastOptions & {
    position?: ToastPosition;
  };

const DEFUALT_POSITION = 'top-right';

const createNotification = (
  type: string,
  options: NotificationFunctionOptions,
) => {
  createToastContainerIfNotExists('casts-toast-wrapper');

  const { position = DEFUALT_POSITION, duration, ...props } = options;
  const toastOptions = {
    position,
    duration: props.close ? Infinity : duration,
    Component: Notification,
    props: {
      ...props,
      theme: type,
    },
  };
  return toast(props.content as any, toastOptions);
};

const info = (options: NotificationFunctionOptions) =>
  createNotification('info', options);
const success = (options: NotificationFunctionOptions) =>
  createNotification('success', options);
const warning = (options: NotificationFunctionOptions) =>
  createNotification('warning', options);
const error = (options: NotificationFunctionOptions) =>
  createNotification('error', options);

const closeAll = () => toast.dismiss();

export const notification = {
  info,
  success,
  warning,
  error,
  closeAll,
};
