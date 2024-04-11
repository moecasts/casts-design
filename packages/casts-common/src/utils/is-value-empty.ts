import { isEmpty } from 'lodash-es';

/**
 * `{} / [] / '' / undefined / null` are considered empty;
 * `0 / false` are considered as normal data.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isValueEmpty(val: any): boolean {
  const type: string = Object.prototype.toString.call(val);
  const typeMap: Record<string, string> = {
    Date: '[object Date]',
  };
  if (type === typeMap.Date) {
    return false;
  }
  return typeof val === 'object'
    ? isEmpty(val)
    : ['', undefined, null].includes(val);
}
