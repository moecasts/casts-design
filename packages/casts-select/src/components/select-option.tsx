import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { Checkbox } from '@casts/checkbox';
import { useRipple } from '@casts/common';

import { useSelectOption } from './hooks';
import { useSelectContext } from './select-context';
import { SelectOptionProps } from './types';

export const SelectOption = forwardRef(
  (props: SelectOptionProps, ref: Ref<HTMLLIElement>) => {
    const {
      classes,
      styles,
      labelClasses,
      selected,
      children,
      handleChange,
      handleKeyDown,
    } = useSelectOption(props);

    const liRef = useRef<HTMLLIElement>(null);

    useRipple(liRef);

    useImperativeHandle(ref, () => liRef.current as HTMLLIElement);

    const { multiple } = useSelectContext();

    return (
      <li
        className={classes}
        style={styles}
        ref={liRef}
        role="option"
        aria-selected={selected}
        onClick={() => handleChange()}
        onKeyDown={handleKeyDown}
      >
        {multiple && <Checkbox checked={selected} value={selected} />}
        <span className={labelClasses}>{children}</span>
      </li>
    );
  },
);

SelectOption.displayName = 'SelectOption';
