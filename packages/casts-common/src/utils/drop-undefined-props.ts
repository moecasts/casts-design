/**
 * drop undefined props from object
 * @param {object} obj
 * @returns {object}
 */
export const dropUndefinedProps = (obj: object): object => {
  const newObj: Record<PropertyKey, any> = { ...obj };
  Object.keys(newObj).forEach(
    (key) => newObj[key] === undefined && delete newObj[key],
  );
  return newObj;
};
