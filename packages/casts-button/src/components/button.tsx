import {
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  Ref,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react';
import { isKeyboardConfirm, useDefaultProps, useRipple } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Loader3Line } from '@casts/icons';
import clsx from 'clsx';

import { ButtonGroupContext } from './button-group';
import { defaultButtonProps } from './default-props';
import type { ButtonProps } from './types';

import './styles/button.scss';

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement | HTMLAnchorElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultButtonProps);
    const {
      shape: parentShape,
      variant: parentVariant,
      theme: parentTheme,
      size: parentSize,
      disabled: parentDisabled,
    } = useContext(ButtonGroupContext);

    const {
      variant = parentVariant || defaultButtonProps.variant,
      size = parentSize || defaultButtonProps.size,
      shape = parentShape || defaultButtonProps.shape,
      icon,
      children,
      className,
      theme = parentTheme || defaultButtonProps.theme,
      block = false,
      disabled = parentDisabled || false,
      loading = false,
      onClick,
      pastel,
      bordered,
      ...rest
    } = propsWithDefault;
    const { getPrefixCls } = useConfig();

    const isThemePastel = theme && pastel && variant === 'contained';

    const prefixCls = getPrefixCls('button');
    const classes = clsx(prefixCls, className, {
      [`${prefixCls}--${variant}`]: variant,
      [`${prefixCls}--${size}`]: size,
      [`${prefixCls}--${theme}`]: theme,
      [`${prefixCls}--theme-pastel`]: isThemePastel,
      [`${prefixCls}--bordered`]: isThemePastel && bordered,
      [`${prefixCls}--${shape}`]: shape,
      [`${prefixCls}--block`]: block,
      [`${prefixCls}--disabled`]: disabled || loading,
      [`${prefixCls}--loading`]: loading,
      [`${prefixCls}--only-icon`]: icon && !children,
    });
    const textClasses = `${prefixCls}-text`;
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement, [
      buttonRef,
    ]);

    useRipple(buttonRef, { disabled: loading || disabled });

    const handleClick = (
      event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    ) => {
      if (loading || disabled) {
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick?.(event as any);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
      if (!isKeyboardConfirm(event.code)) {
        return;
      }

      handleClick(event as unknown as MouseEvent<HTMLAnchorElement>);
    };

    const loadingClasses = getPrefixCls('loading');
    const loadingNode = loading && (
      <span className={loadingClasses}>
        <Loader3Line />
      </span>
    );

    if (variant === 'link') {
      return (
        <a
          role="button"
          className={classes}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          aria-disabled={loading || disabled}
          tabIndex={loading || disabled ? -1 : 0}
          {...rest}
        >
          {icon}
          {loadingNode}
          <span className={textClasses}>{children}</span>
        </a>
      );
    }

    return (
      <button
        className={classes}
        ref={buttonRef}
        aria-disabled={loading || disabled}
        onClick={handleClick}
        tabIndex={loading || disabled ? -1 : 0}
        {...rest}
      >
        {icon}
        {loadingNode}
        <span className={textClasses}>{children}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';
