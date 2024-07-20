import { CSSProperties, KeyboardEvent, useMemo } from 'react';
import { isKeyboardConfirm } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { useSelectContext } from '../select-context';
import { SelectValue, UseSelectOptionProps } from '../types';

export const useSelectOption = (props: UseSelectOptionProps) => {
  const { className, style, value, ...rest } = props;

  const { getPrefixCls } = useConfig();

  const { value: currentActiveValue, onChange, multiple } = useSelectContext();

  const selected = useMemo(() => {
    if (props.selected) {
      return props.selected;
    }

    if (multiple) {
      return !!currentActiveValue?.includes(value);
    }

    return currentActiveValue === value;
  }, [currentActiveValue, props.selected, value, multiple]);

  const prefix = getPrefixCls('select-option');

  /* --------------------------------- classes and styles ---------------------------------------- */
  const classes = clsx(prefix, className, {
    [`${prefix}--selected`]: selected,
  });

  const labelClasses = `${prefix}-label`;

  const styles: CSSProperties = { ...style };

  /* --------------------------------- events ---------------------------------------- */
  const { handleOpenChange } = useSelectContext();

  const baseHandleChange = (value: SelectValue) => {
    onChange?.(value);

    if (!multiple) {
      handleOpenChange(false);
    }
  };

  const handleChange = () => {
    baseHandleChange(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!isKeyboardConfirm(e.code)) {
      return;
    }

    baseHandleChange(value);
  };

  return {
    classes,
    styles,

    labelClasses,

    selected,

    handleChange,
    handleKeyDown,

    ...rest,
  };
};
