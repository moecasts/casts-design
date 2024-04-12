import { createToastContainerIfNotExists } from '@casts/toast';
import toast, {
  Renderable,
  ToastOptions,
  ToastPosition,
} from 'react-hot-toast';

import { Notification } from './components/notification';
import { NotificationProps } from './components/types';

type NotificationFunctionOptions = NotificationProps &
  ToastOptions & {
    placement?: ToastPosition;
  };

const DEFAULT_PLACEMENT = 'top-right';

const createNotification = (
  type: string,
  options: NotificationFunctionOptions,
) => {
  createToastContainerIfNotExists('cds-toast-root');

  const { placement = DEFAULT_PLACEMENT, duration, ...props } = options;
  const toastOptions = {
    position: placement,
    duration: props.close ? Infinity : duration,
    Component: Notification,
    props: {
      ...props,
      theme: type,
    },
  };
  return toast(props.content as Renderable, toastOptions);
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
