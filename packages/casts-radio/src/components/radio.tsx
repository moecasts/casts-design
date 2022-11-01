import clsx from 'clsx';
import {
  ChangeEvent,
  CSSProperties,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { useConfig } from '@casts/config-provider';
import { useControlled, isFunction, isBoolean, noop } from '@casts/hooks';
import { ChangeEventHandler, RadioValue } from '../types';
import { RadioGroupContext } from './radio-group';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import './styles/radio.scss';

export type CustomRadioComponentFunction = ({
  checked,
}: {
  checked: boolean;
}) => ReactNode;

export type RadioProps = {
  children: ReactNode | CustomRadioComponentFunction;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
  allowUncheck?: boolean;
  checked?: RadioValue;
  defaultChecked?: RadioValue;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  name?: string;
};

export const Radio = forwardRef((props: RadioProps, ref) => {
  const {
    className,
    style,
    allowUncheck,
    onChange: onChangeFromProps = noop,
    children,
    value,
  } = props;

  const groupContext = useContext(RadioGroupContext);

  const mergedProps = { ...props };

  if (groupContext.group) {
    mergedProps.checked = groupContext.value === props.value;
    mergedProps.name = groupContext.name;
    mergedProps.disabled = mergedProps.disabled ?? groupContext.disabled;
  }

  const { name, disabled } = mergedProps;

  const [checked, setChecked] = useControlled(
    mergedProps,
    'checked',
    onChangeFromProps,
  );
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled || (checked && !allowUncheck)) {
      return;
    }
    const context = { e };
    if (groupContext.group) {
      groupContext.onChange?.(props.value, context);
      return;
    }
    setChecked(!checked, context);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('radio');
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--disabled`]: disabled,
    [`${prefixCls}--checked`]: checked,
  });

  const onLabelClick = useCallback(
    (e: MouseEvent<HTMLLabelElement>) => {
      if (isFunction(children)) {
        e.preventDefault();
        inputRef.current?.click();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.children, props.onChange],
  );

  useImperativeHandle(ref, () => ({
    inputRef,
  }));

  return (
    // eslint-disable-next-line
    <label className={classes} style={style} onClick={onLabelClick}>
      <input
        type="radio"
        className={`${prefixCls}-pre`}
        checked={!!checked}
        ref={inputRef}
        value={isBoolean(value) ? Number(value) : value}
        onChange={(e) => {
          e.persist();
          onChange(e);
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (checked && allowUncheck) {
            onChange(e as unknown as ChangeEvent<HTMLInputElement>);
          }
        }}
        disabled={disabled}
        name={name}
      />
      {isFunction(children) ? (
        // @ts-ignore this is a function
        children({ checked })
      ) : (
        <>
          <span className={`${prefixCls}-input`}></span>
          <span className={`${prefixCls}-label`}>{children as ReactNode}</span>
        </>
      )}
    </label>
  );
});

Radio.displayName = 'Radio';
