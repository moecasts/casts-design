import { forwardRef, Ref, useImperativeHandle } from 'react';
import { Button } from '@casts/button';
import { useDefaultProps } from '@casts/common';
import { ArrowDownSLine, ArrowUpSLine } from '@casts/icons';
import { Input } from '@casts/input';

import { defaultInputNumberProps } from './default-props';
import { useInputNumber } from './hooks';
import { InputNumberProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/input-number.scss';

export const InputNumber = forwardRef(
  (props: InputNumberProps, ref: Ref<HTMLInputElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultInputNumberProps);

    const {
      classes,
      styles,

      handlerClasses,

      value,
      defaultValue,

      handleChange,
      handleIncrease,
      handleDecrease,

      handleBlur,

      controls,
      aboveMaxValue,
      belowMinValue,
      overRangeValue,

      status,

      ...rest
    } = useInputNumber(propsWithDefault);

    useImperativeHandle(ref, () => ({}) as any);

    return (
      <div>
        <Input
          {...rest}
          defaultValue={defaultValue as unknown as string}
          value={value as string}
          onChange={handleChange}
          onBlur={handleBlur}
          className={classes}
          style={styles}
          status={status ?? (overRangeValue ? 'error' : undefined)}
          suffix={
            <>
              {controls && (
                <div className={handlerClasses}>
                  <Button
                    size="small"
                    pastel
                    theme="neutral"
                    disabled={aboveMaxValue}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleIncrease();
                    }}
                  >
                    <ArrowUpSLine />
                  </Button>
                  <Button
                    size="small"
                    pastel
                    theme="neutral"
                    disabled={belowMinValue}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDecrease();
                    }}
                  >
                    <ArrowDownSLine />
                  </Button>
                </div>
              )}
            </>
          }
        />
      </div>
    );
  },
);

InputNumber.displayName = 'InputNumber';
