import { useMemo } from 'react';

// Function Component defaultProps will deprecate at 18.3.0, so use a custom hook to be comptiable
// https://github.com/facebook/react/pull/16210
export function useDefaultProps<T>(
  originalProps: T,
  defaultProps: Record<PropertyKey, any>,
): T {
  return useMemo<T>(() => {
    // eslint-disable-next-line
    const props: Record<PropertyKey, any> = Object.assign({}, originalProps);
    Object.keys(defaultProps).forEach((key) => {
      // https://github.com/facebook/react/blob/main/packages/react/src/ReactElement.js#L328-L330
      if (props[key] === undefined) {
        props[key] = defaultProps[key];
      }
    });
    return props;
  }, [originalProps, defaultProps]);
}
