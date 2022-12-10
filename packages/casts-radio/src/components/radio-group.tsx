import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { noop, useControlled } from '@casts/hooks';
import { createContext, CSSProperties, FC, ReactNode } from 'react';
import { ChangeEventHandler, RadioValue } from '../types';
import './styles/radio-group.scss';

export type RadioGroupProps = {
  defaultValue?: RadioValue;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  onChange?: ChangeEventHandler;
  style?: CSSProperties;
  type?: 'radio' | 'button';
};

export interface RadioGroupContextProps {
  disabled?: boolean;
  group?: boolean;
  name?: RadioGroupProps['name'];
  onChange?: ChangeEventHandler;
  type: 'radio' | 'button';
  value?: RadioValue;
}

export const RadioGroupContext = createContext<RadioGroupContextProps>({
  type: 'radio',
});

export const defaultProps: RadioGroupProps = {
  type: 'radio',
};

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    children,
    className,
    disabled,
    name,
    onChange: onChangeFromProps = noop,
    type = 'radio',
  } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('radio-group');
  const classes = clsx(prefixCls, className);
  const [value, onChange] = useControlled(props, 'value', onChangeFromProps);
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

RadioGroup.defaultProps = defaultProps;
