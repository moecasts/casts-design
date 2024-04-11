import { CSSProperties, ReactElement, ReactNode } from 'react';

export type AlertTheme = 'info' | 'success' | 'warning' | 'error';

export type AlertProps = {
  /**
   * alert title
   * @description alert title
   */
  title?: ReactNode;
  /**
   * alert footer
   */
  footer?: ReactNode;
  /**
   * custom class
   */
  className?: string;
  /**
   * custom style
   */
  style?: CSSProperties;
  /**
   * alert theme
   * @default info
   */
  theme?: AlertTheme;
  /**
   * is alert visible
   * @default true
   */
  visible?: boolean;
  /**
   * alert content
   */
  content: ReactNode;
  /**
   * @default true
   */
  icon?: ReactElement | boolean;
  /**
   * is solid color theme
   * @default false
   */
  solid?: boolean;
  /**
   * is show close button or custom close button
   * @default true
   */
  close?: ReactNode | boolean;
  /**
   * transition duration(ms)
   * @default 300
   */
  duration?: number;
  /**
   * onClose event handler
   */
  onClose?: () => void;
};
