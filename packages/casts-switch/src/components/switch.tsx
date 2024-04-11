import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { useDefaultProps } from '@casts/common';
import { CircularProgress } from '@casts/progress';

import { defaultSwitchProps } from '../default-props';
import { useSwitch } from './hooks';
import { SwitchProps } from './types';

import '@casts/theme/styles/scss/core.scss';
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
      loading,
      indicatorHandleIconLoadingClasses,
      handlePressStart,
      handlePressEnd,
      handleBlur,

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
        tabIndex={disabled || loading ? -1 : 0}
        aria-checked={checked}
        onTouchStart={handlePressStart}
        onMouseDown={handlePressStart}
        onKeyDown={handlePressStart}
        onKeyUp={handlePressEnd}
        onBlur={handleBlur}
      >
        <input
          type="checkbox"
          role="switch"
          aria-hidden="true"
          tabIndex={-1}
          style={{ display: 'none' }}
          value={String(checked)}
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
              {loading ? (
                <CircularProgress
                  className={indicatorHandleIconLoadingClasses}
                  track
                />
              ) : (
                renderHandleIcon()
              )}
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
