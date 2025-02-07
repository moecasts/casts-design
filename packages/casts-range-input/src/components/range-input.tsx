import { forwardRef, Ref } from 'react';
import { some, useDefaultProps } from '@casts/common';
import { CloseLine } from '@casts/icons';

import { defaultRangeInputProps } from './default-props';
import { useRangeInput } from './hooks';
import { RangeInputProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/range-input.scss';

const START_INDEX = 0;
const END_INDEX = 1;

export const RangeInput = forwardRef(
  (props: RangeInputProps, ref: Ref<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultRangeInputProps);

    const {
      wrapClasses,
      classes,
      styles,
      innerClasses,
      separatorClasses,
      handleChange,
      handleFocus,
      handleBlur,
      prefix,
      prefixClasses,
      suffix,
      suffixClasses,
      tips,
      tipsClasses,

      startValue,
      startPlaceholder,
      startComposingRefValue,

      endValue,
      endPlaceholder,
      endComposingRefValue,

      handleCompositionStart,
      handleCompositionEnd,

      startInputRef,
      endInputRef,

      focusInput,

      clearClasses,
      clearable,
      clearValue,
      value,

      disabled,
      handleKeyDown,
    } = useRangeInput(propsWithDefault);

    return (
      <div className={wrapClasses} style={styles} ref={ref}>
        <div role="presentation" className={classes} onClick={focusInput}>
          {prefix && <span className={prefixClasses}>{prefix}</span>}
          <input
            disabled={disabled}
            ref={startInputRef}
            value={(startComposingRefValue || startValue) ?? ''}
            onChange={(e) => handleChange(START_INDEX, e)}
            placeholder={startPlaceholder}
            className={innerClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onCompositionStart={(e) => handleCompositionStart(START_INDEX, e)}
            onCompositionEnd={(e) => handleCompositionEnd(START_INDEX, e)}
            onKeyDown={(e) => handleKeyDown(START_INDEX, e)}
          />

          <span className={separatorClasses}>-</span>

          <input
            disabled={disabled}
            ref={endInputRef}
            value={(endComposingRefValue || endValue) ?? ''}
            onChange={(e) => handleChange(END_INDEX, e)}
            placeholder={endPlaceholder}
            className={innerClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onCompositionStart={(e) => handleCompositionStart(END_INDEX, e)}
            onCompositionEnd={(e) => handleCompositionEnd(END_INDEX, e)}
            onKeyDown={(e) => handleKeyDown(END_INDEX, e)}
          />

          {clearable && some(value, Boolean) && (
            <button
              className={clearClasses}
              onClick={(e) => {
                e.stopPropagation();
                clearValue(e);
              }}
            >
              <CloseLine />
            </button>
          )}
          {suffix && <span className={suffixClasses}>{suffix}</span>}
        </div>
        {tips && <div className={tipsClasses}>{tips}</div>}
      </div>
    );
  },
);

RangeInput.displayName = 'RangeInput';
