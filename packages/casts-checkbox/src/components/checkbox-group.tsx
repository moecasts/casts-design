import { createContext, forwardRef, Ref } from 'react';
import { useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { defaultCheckboxGroupProps } from './default-props';
import { useCheckboxGroupState } from './hooks';
import { CheckboxGroupContextProps, CheckboxGroupProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/checkbox-group.scss';

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps>({
  type: 'checkbox',
});

export const CheckboxGroup = forwardRef(
  (props: CheckboxGroupProps, ref: Ref<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultCheckboxGroupProps);
    const { children, className, disabled, name, direction } = propsWithDefault;
    const { getPrefixCls } = useConfig();
    const prefixCls = getPrefixCls('checkbox-group');
    const classes = clsx(prefixCls, className, {
      [`${prefixCls}--vertical`]: direction,
    });
    const { value, onChange, ...rest } =
      useCheckboxGroupState(propsWithDefault);
    const CheckboxGroupContextValue: CheckboxGroupContextProps = {
      name,
      type: 'checkbox',
      value,
      disabled,
      onChange,
      group: true,
      ...rest,
    };

    return (
      <CheckboxGroupContext.Provider value={CheckboxGroupContextValue}>
        <div className={classes} ref={ref}>
          {children}
        </div>
      </CheckboxGroupContext.Provider>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
