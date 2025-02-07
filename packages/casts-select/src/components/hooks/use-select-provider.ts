import { useCallback, useMemo } from 'react';

import { SelectOption, SelectValue, UseSelectProviderProps } from '../types';
import { useSelectOpen } from './use-select-popup';
import { useSelectValue } from './use-select-value';

export const useSelectProvider = (props: UseSelectProviderProps) => {
  const { options } = props;

  const { value, handleChange, isSelected } = useSelectValue(props);

  const { open, handleOpenChange } = useSelectOpen(props);

  const getValueDisplay = useCallback(
    (payload: { value?: SelectValue; options?: SelectOption[] }) => {
      const { value, options } = payload;

      return options?.find((option) => option.value === value)?.label;
    },
    [],
  );

  const valueDisplay = useMemo(
    () =>
      getValueDisplay({
        value,
        options,
      }),
    [getValueDisplay, value, options],
  );

  return {
    value,
    valueDisplay,
    handleChange,

    isSelected,

    open,
    handleOpenChange,
  };
};
