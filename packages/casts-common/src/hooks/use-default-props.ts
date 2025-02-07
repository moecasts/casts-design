import { useMemo } from 'react';
import { isUndefined } from 'lodash-es';

// Function Component defaultProps will deprecate at 18.3.0, so use a custom hook to be compatible
// https://github.com/facebook/react/pull/16210
export function useDefaultProps<
  T extends Record<string, any>,
  P extends Partial<T>,
>(originalProps: T, defaultProps: P): T {
  return useMemo<T>(() => {
    const props: T = Object.assign({}, originalProps) as T;

    Object.keys(defaultProps).forEach((key) => {
      if (
        props[key as keyof T] === undefined &&
        !isUndefined(defaultProps[key])
      ) {
        props[key as keyof T] = defaultProps[key] as any;
      }
    });
    return props;
  }, [originalProps, defaultProps]);
}
