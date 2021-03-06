import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  MouseEvent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';
import clsx from 'clsx';
import { ConfigContext } from '@casts/config-provider';
import './styles.scss';
import ripplet from 'ripplet.js';
import { Loader3Line } from '@casts/icons';
import { ButtonGroupContext } from './button-group';

export type ButtonShape = 'square' | 'round' | 'shape';
export type ButtonVariant =
  | 'contained'
  | 'outline'
  | 'dashed'
  | 'text'
  | 'link'
  | 'ghost';

export type ButtonBlock = boolean;

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'disabled'
  | 'black'
  | 'white';

export type ButtonSize = 'small' | 'default' | 'large';

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
   * @default primary
   */
  color?: ButtonColor;
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

export const Button: FC<ButtonProps> = (props) => {
  const {
    shape: parentShape,
    variant: parentVariant,
    color: parentColor,
    size: parentSize,
    disabled: parentDisabled,
  } = useContext(ButtonGroupContext);

  const {
    variant = parentVariant || 'contained',
    size = parentSize || 'default',
    shape = parentShape || 'round',
    icon,
    children,
    className,
    color = parentColor || 'primary',
    block = false,
    disabled = parentDisabled || false,
    loading = false,
    onClick: onClick,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('button');
  const classes = clsx(className, prefixCls, {
    [`${prefixCls}--${variant}`]: variant,
    [`${prefixCls}--${size}`]: size && size !== 'default',
    [`${prefixCls}--${color}`]: color,
    [`${prefixCls}--${shape}`]: shape,
    [`${prefixCls}--block`]: block,
    [`${prefixCls}--disabled`]: disabled || loading,
    [`${prefixCls}--loading`]: loading,
    [`${prefixCls}--only-icon`]: icon && !children,
  });
  const textClasses = `${prefixCls}-inner`;
  const buttonRef = useRef<HTMLButtonElement>(null);

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
        {...rest}
        tabIndex={0}
        onClick={onInternalClick}
        onKeyPress={onInternalClick as any}
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
      {...rest}
      ref={buttonRef}
      disabled={loading || disabled}
      onClick={onInternalClick}
    >
      {icon}
      {loadingNode}
      <span className={textClasses}>{children}</span>
    </button>
  );
};

export { ButtonGroup } from './button-group';
