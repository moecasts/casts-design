/**
 * format size unit
 * eg:
 * 10 => 10px
 * 10% => 10%
 * @param {string | number} size
 * @returns {string}
 */
export const formatSizeUnit = (size: string | number) => {
  if (typeof size === 'number') {
    return `${size}px`;
  }
  return size;
};
