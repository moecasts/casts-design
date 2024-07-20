/**
 * translate px to number
 * eg:
 *  10px => 10
 */
export const translatePxToNumber = (str: string): number => {
  const result = Number(str.replace('px', ''));
  return isNaN(result) ? 0 : result;
};
