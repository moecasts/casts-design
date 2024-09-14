import {
  ChangeEvent,
  InputHTMLAttributes,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { isBoolean, isFunction, noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { AnimateCheckLine } from '@casts/icons';
import clsx from 'clsx';

import { CheckboxGroupContext } from './checkbox-group';
import { CheckboxProps } from './types';

import '@casts/theme/styles/scss/core.scss';
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

  useImperativeHandle(ref, () => inputRef.current);

  const checkIconClasses = `${prefixCls}-check-icon`;

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
        disabled={disabled}
        name={name}
      />
      {isFunction(children) ? (
        children({ checked: !!checked })
      ) : (
        <>
          <span className={`${prefixCls}-input`}>
            {!indeterminate && (
              <AnimateCheckLine
                className={checkIconClasses}
                checked={Boolean(checked)}
              />
            )}
          </span>
          <span className={`${prefixCls}-label`}>{children as ReactNode}</span>
        </>
      )}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
