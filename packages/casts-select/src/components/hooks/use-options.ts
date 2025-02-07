import { Children, useMemo } from 'react';

export const useOptions = (props: any) => {
  const { children } = props;

  const options = useMemo(() => {
    if (props.options) {
      return props.options;
    }

    return Children.toArray(children);
  }, [children, props.options]);

  return { options };
};
