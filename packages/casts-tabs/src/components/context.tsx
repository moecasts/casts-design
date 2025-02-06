import { createContext, FC, useContext } from 'react';
import { BaseComponentProps, noop, Size, useControlled } from '@casts/common';

import { TabValue } from './types';

export type TabsContextProps = {
  size?: Size;
  value?: TabValue;
  defaultValue?: TabValue;

  onChange?: (value: TabValue) => void;

  handleValueChange?: (value: TabValue) => void;
};

export const TabsContext = createContext<TabsContextProps>({
  size: 'medium',
});

export type TabsProviderProps = Pick<BaseComponentProps, 'children'> &
  Partial<TabsContextProps>;

export const TabsProvider: FC<TabsProviderProps> = (props) => {
  const { children, onChange = noop, ...rest } = props;

  const [value, setValue] = useControlled(props, 'value', onChange);

  const handleChange = (value: TabValue) => {
    setValue(value);
  };

  const contextValue = {
    ...rest,
    value,
    onChange: handleChange,
  };

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};

export const useTabsContext = () => useContext(TabsContext);
