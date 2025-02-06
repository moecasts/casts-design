import { noop } from 'lodash-es';

import {
  ChangeEventContext,
  createMultipleValueActions,
} from '../utils/create-multiple-value-actions';
import { useControlled } from './use-controlled';

export type Value = boolean | string | number;

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
