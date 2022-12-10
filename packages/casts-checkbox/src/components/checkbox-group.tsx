import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { createContext, FC } from 'react';
import { CheckboxGroupContextProps, CheckboxGroupProps } from './types';
import './styles/checkbox-group.scss';
import { useCheckboxGroupState } from './hooks/useCheckboxGroupState';

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps>({
  type: 'checkbox',
});

export const defaultProps: CheckboxGroupProps = {
  type: 'checkbox',
};

export const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const { children, className, disabled, name, direction } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('checkbox-group');
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--vertical`]: direction,
  });
  const { value, onChange, ...rest } = useCheckboxGroupState(props);

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
      <div className={classes}>{children}</div>
    </CheckboxGroupContext.Provider>
  );
};

CheckboxGroup.defaultProps = defaultProps;
