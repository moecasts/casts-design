type NonUndefined<T> = {
  [P in keyof T]: Exclude<T[P], undefined>;
};
/**
 * drop undefined props from object
 * @param {object} obj
 * @returns {object}
 */
export const dropUndefinedProps = <T extends object>(
  obj: T,
): NonUndefined<T> => {
  const newObj: Record<PropertyKey, any> = { ...obj };
  Object.keys(newObj).forEach(
    (key) => newObj[key] === undefined && delete newObj[key],
  );

  return newObj as NonUndefined<T>;
};
