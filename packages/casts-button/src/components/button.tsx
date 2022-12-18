import { useConfig } from '@casts/config-provider';
import { Loader3Line } from '@casts/icons';
import clsx from 'clsx';
import {
  forwardRef,
  MouseEvent,
  Ref,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import ripplet from 'ripplet.js';
import { ButtonGroupContext } from './button-group';
import { defaultButtonProps } from './default-props';
import type { ButtonProps } from './types';
import './styles/button.scss';

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement | HTMLAnchorElement>) => {
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
      onClick: onClick,
      pastel,
      bordered,
      ...rest
    } = props;
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
    const textClasses = `${prefixCls}-inner`;
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement, [
      buttonRef,
    ]);

    useEffect(() => {
      if (!buttonRef.current) {
        return;
      }
      const button = buttonRef.current;
      const bindRipple = (event: PointerEvent) => {
        if (loading || disabled) {
          return;
        }
        ripplet(event);
      };

      button.addEventListener('pointerdown', bindRipple);
      return () => button.removeEventListener('pointerdown', bindRipple);
    }, [buttonRef, loading, disabled]);

    const onInternalClick = (
      event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    ) => {
      if (loading || disabled || !onClick) {
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick(event as any);
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
          tabIndex={0}
          onClick={onInternalClick}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onKeyPress={onInternalClick as any}
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
        disabled={loading || disabled}
        onClick={onInternalClick}
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
