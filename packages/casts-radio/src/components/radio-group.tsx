import { createContext, FC } from 'react';
import { noop, useControlled, useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { defaultRadioGroupProps } from './default-props';
import { RadioGroupContextProps, RadioGroupProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/radio-group.scss';

export const RadioGroupContext = createContext<RadioGroupContextProps>({
  type: 'radio',
});

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const propsWithDefault = useDefaultProps(props, defaultRadioGroupProps);
  const {
    children,
    className,
    disabled,
    name,
    onChange: onChangeFromProps = noop,
    type = 'radio',
  } = propsWithDefault;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('radio-group');
  const classes = clsx(prefixCls, className);
  const [value, onChange] = useControlled(
    propsWithDefault,
    'value',
    onChangeFromProps,
  );
  const RadioGroupContextValue: RadioGroupContextProps = {
    name,
    type,
    value,
    disabled,
    onChange,
    group: true,
  };

  return (
    <RadioGroupContext.Provider value={RadioGroupContextValue}>
      <div className={classes} role="group">
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};
