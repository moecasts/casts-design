/* @ts-nocheck nocheck */
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ForwardedRef,
  forwardRef,
  MouseEvent,
  ReactNode,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import clsx from 'clsx';
import { useConfig } from '@casts/config-provider';
import ripplet from 'ripplet.js';
import { Loader3Line } from '@casts/icons';
import { ButtonGroupContext } from './button-group';
import './styles/button.scss';
import { defaultButtonProps } from './default-props';

export type ButtonShape = 'square' | 'round' | 'pill';

export type ButtonVariant =
  | 'contained'
  | 'outline'
  | 'dashed'
  | 'text'
  | 'link'
  | 'ghost';

export type ButtonBlock = boolean;

export type ButtonTheme =
  | 'brand'
  // | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'disabled';
// | 'black'
// | 'white';

export type ButtonSize = 'small' | 'medium' | 'large';

export type BaseButtonProps = {
  icon?: ReactNode;
  /**
   * @default round
   */
  shape?: ButtonShape;
  /**
   * @default contained
   */
  variant?: ButtonVariant;
  /**
   * @default brand
   */
  theme?: ButtonTheme;
  /**
   * @default default
   */
  size?: ButtonSize;
  /**
   * @default false
   */
  block?: boolean;
  /**
   * @default false
   */
  loading?: boolean;
  /**
   * @default false;
   */
  disabled?: boolean;
  forwardedRef: ForwardedRef<HTMLButtonElement>;
};

export type NativeButtonProps = {
  htmlType?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps;
export type AnchorButtonProps = {
  href: string;
  target?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButtonProps;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const InternalButton: FC<ButtonProps> = (props) => {
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
    forwardedRef,
    ...rest
  } = props;
  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('button');
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${variant}`]: variant,
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--${theme}`]: theme,
    [`${prefixCls}--${shape}`]: shape,
    [`${prefixCls}--block`]: block,
    [`${prefixCls}--disabled`]: disabled || loading,
    [`${prefixCls}--loading`]: loading,
    [`${prefixCls}--only-icon`]: icon && !children,
  });
  const textClasses = `${prefixCls}-inner`;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(
    forwardedRef,
    () => buttonRef.current as HTMLButtonElement,
    [buttonRef],
  );

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
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => (
    <InternalButton {...props} forwardedRef={forwardedRef} />
  ),
);

Button.displayName = 'Button';

export { ButtonGroup } from './button-group';
