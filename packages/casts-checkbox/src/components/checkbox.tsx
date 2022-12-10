import clsx from 'clsx';
import {
  ChangeEvent,
  InputHTMLAttributes,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { useConfig } from '@casts/config-provider';
import { useControlled, isFunction, isBoolean, noop } from '@casts/hooks';
import { CheckboxProps } from './types';
import { CheckboxGroupContext } from './checkbox-group';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import './styles/checkbox.scss';

export const Checkbox = forwardRef((props: CheckboxProps, ref) => {
  const {
    className,
    style,
    onChange: onChangeFromProps = noop,
    children,
    value = true,
    indeterminate,
  } = props;

  const groupContext = useContext(CheckboxGroupContext);

  const mergedProps = { ...props };

  if (groupContext.group) {
    mergedProps.checked =
      props.value && groupContext.value?.includes(props.value);
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
    if (disabled) {
      return;
    }
    const context = { e };
    if (props.value && groupContext.group) {
      groupContext.toggleValue?.(props.value, context);
      return;
    }
    setChecked(!checked, context);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('checkbox');
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--disabled`]: disabled,
    [`${prefixCls}--checked`]: checked,
    [`${prefixCls}--indeterminate`]: indeterminate,
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
        type="checkbox"
        className={`${prefixCls}-pre`}
        checked={!!checked}
        ref={inputRef}
        value={
          isBoolean(value)
            ? Number(value)
            : (value as InputHTMLAttributes<HTMLInputElement>['value'])
        }
        onChange={(e) => {
          e.persist();
          onChange(e);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onChange(e as unknown as ChangeEvent<HTMLInputElement>);
        }}
        disabled={disabled}
        name={name}
      />
      {isFunction(children) ? (
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

Checkbox.displayName = 'Checkbox';
