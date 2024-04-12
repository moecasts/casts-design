import { CSSProperties, ReactElement, ReactNode } from 'react';

export enum MessageTheme {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  LOADING = 'loading',
}

export type MessageProps = {
  className?: string;
  style?: CSSProperties;
  theme?: `${MessageTheme}`;
  visible?: boolean;
  content: ReactNode;
  icon?: ReactElement | boolean;
  fill?: boolean;
  close?: ReactNode | boolean;
  onClose?: () => void;
};
