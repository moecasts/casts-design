import { CSSProperties, ReactElement, ReactNode } from 'react';

export type NotificationTheme =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'loading';

export type NotificationProps = {
  title: ReactNode;
  footer?: ReactNode;
  className?: string;
  style?: CSSProperties;
  theme?: NotificationTheme;
  visible?: boolean;
  content: ReactNode;
  icon?: ReactElement | boolean;
  solid?: boolean;
  close?: ReactNode | boolean;
  onClose?: () => void;
};
