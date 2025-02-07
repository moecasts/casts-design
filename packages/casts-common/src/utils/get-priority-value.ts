/**
 * Returns the first value that is not `undefined` from the provided values.
 *
 * This function takes multiple values and returns the first one that is not `undefined`.
 * If all values are `undefined`, it returns `undefined`.
 *
 * @template T - The type of the values.
 * @param {...(T | undefined)[]} values - The values to check.
 * @returns {(T | undefined)} The first value that is not `undefined`, or `undefined` if all values are `undefined`.
 *
 * @example
 * // Returns "Hello"
 * const result = getPriorityValue(undefined, "Hello", "World");
 *
 * @example
 * // Returns 42
 * const result = getPriorityValue(undefined, 42, 100);
 *
 * @example
 * // Returns undefined
 * const result = getPriorityValue(undefined, undefined, undefined);
 */
export const getPriorityValue = <T>(
  ...values: (T | undefined)[]
): T | undefined => {
  for (const value of values) {
    if (value !== undefined) {
      return value;
    }
  }
  return undefined;
};
