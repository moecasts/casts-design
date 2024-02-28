import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { useDefaultProps } from '@casts/common';

import { defaultSwitchProps } from '../default-props';
import { useSwitch } from './hooks';
import { SwitchProps } from './types';

import './styles/switch.scss';

export const Switch = forwardRef(
  (props: SwitchProps, ref: Ref<HTMLLabelElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultSwitchProps);

    const {
      classes,
      indicatorClasses,
      indicatorPlaceholderClasses,
      indicatorHandleClasses,
      indicatorHandleIconClasses,
      labelClasses,
      checked,
      disabled,
      handlePressStart,
      handlePressEnd,
      handleChange,

      startContent,
      endContent,
      renderHandleIcon,

      indicatorStartClasses,
      indicatorEndClasses,

      label,
    } = useSwitch(propsWithDefault);

    const labelRef = useRef<HTMLLabelElement>(null);

    useImperativeHandle(ref, () => labelRef.current as HTMLLabelElement);

    return (
      <label
        className={classes}
        ref={labelRef}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="switch"
        tabIndex={disabled ? -1 : 0}
        aria-checked={checked}
        onKeyDown={handlePressStart}
        onKeyUp={handlePressEnd}
      >
        <input
          type="checkbox"
          role="switch"
          aria-hidden="true"
          tabIndex={-1}
          style={{ display: 'none' }}
          value={String(checked)}
          onChange={handleChange}
          aria-checked={checked}
          disabled={disabled}
        />
        <div className={indicatorClasses}>
          <div className={indicatorPlaceholderClasses}>
            {startContent && (
              <span className={indicatorStartClasses}>{startContent}</span>
            )}
            {endContent && (
              <span className={indicatorEndClasses}>{endContent}</span>
            )}
          </div>
          <span className={indicatorHandleClasses}>
            {startContent && (
              <span className={indicatorStartClasses}>{startContent}</span>
            )}
            <span className={indicatorHandleIconClasses}>
              {renderHandleIcon()}
            </span>
            {endContent && (
              <span className={indicatorEndClasses}>{endContent}</span>
            )}
          </span>
        </div>
        {label && <span className={labelClasses}>{label}</span>}
      </label>
    );
  },
);

Switch.displayName = 'Switch';
