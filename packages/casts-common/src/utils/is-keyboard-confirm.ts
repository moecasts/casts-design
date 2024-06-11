import { isUndefined } from 'lodash-es';

/**
 * check is confirm key (Space/Enter/NumberEnter)
 *
 * @param {string} code
 * @returns {boolean}
 */
export const isKeyboardConfirm = (code?: string): boolean => {
  return !isUndefined(code) && ['Space', 'Enter', 'NumberEnter'].includes(code);
};
