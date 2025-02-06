import { createContext, FC, useContext } from 'react';
import { noop } from '@casts/common';

import { useSelectProvider } from './hooks/use-select-provider';
import { SelectContextProps, SelectProviderProps } from './types';

export const SelectContext = createContext<SelectContextProps>({
  open: false,
  handleOpenChange: noop,
  isSelected: () => false,
});

export const SelectProvider: FC<SelectProviderProps> = (props) => {
  const {
    value,
    handleChange,
    valueDisplay,
    open,
    handleOpenChange,
    isSelected,
  } = useSelectProvider(props);

  return (
    <SelectContext.Provider
      value={{
        value,
        onChange: handleChange,
        valueDisplay,
        open,
        handleOpenChange,
        isSelected,
        multiple: props.multiple,
      }}
    >
      {props.children}
    </SelectContext.Provider>
  );
};

export const useSelectContext = () => useContext(SelectContext);
