import { ChangeEvent, CompositionEvent, MouseEvent } from 'react';
import { noop } from 'lodash-es';

import { createMultipleValueActions } from '../utils/create-multiple-value-actions';
import { useControlled } from './use-controlled';

export type Value = boolean | string | number;

export type ChangeEventContext = {
  action?: 'clear';

  e?:
    | ChangeEvent<HTMLElement>
    | MouseEvent<HTMLElement>
    | CompositionEvent<HTMLInputElement>;
};

export type ChangeEventHandler<T = Value> = (
  value: T,
  context: ChangeEventContext,
) => void;

export type UseMultipleValueProps = {
  value?: Value[];
  defaultValue?: Value[];
  onChange?: (value: Value[]) => void;
};

export const useMultipleValue = (props: UseMultipleValueProps) => {
  const { onChange: onChangeFromProps = noop } = props;
  const [values = [], onChange] = useControlled(
    props,
    'value',
    onChangeFromProps,
  );

  const actions = createMultipleValueActions(values, onChange);

  return {
    value: values,
    onChange,
    ...actions,
  };
};
