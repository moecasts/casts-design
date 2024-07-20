import { noop, useControlled, useMultipleValue } from '@casts/common';

import { SelectValue } from '../types';

export type UseSelectValueProps = {
  value?: SelectValue;

  defaultValue?: SelectValue;

  onChange?: (value: SelectValue) => void;

  multiple?: boolean;
};

export const useSelectValue = (props: UseSelectValueProps) => {
  const { onChange = noop, multiple } = props;

  const [singleValue, setSingleValue] = useControlled(props, 'value', onChange);

  const multipleValueHook = useMultipleValue(props);

  const handleChange = (value: SelectValue) => {
    if (multiple) {
      multipleValueHook.toggleValue(value);
      return;
    }

    setSingleValue(value);
    return;
  };

  const value = multiple ? multipleValueHook.value : singleValue;

  const isSelected = (value: SelectValue) => {
    return multiple
      ? multipleValueHook.isSelected(value)
      : value === singleValue;
  };

  return {
    value,
    handleChange: handleChange,
    isSelected,
  };
};
