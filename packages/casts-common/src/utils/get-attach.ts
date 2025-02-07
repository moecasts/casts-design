import { isString } from 'lodash-es';

/**
 * get attach node
 *
 * @param {unknown} node
 * @returns {HTMLElement}
 */
export const getAttach = (node: unknown): HTMLElement => {
  const attachNode = typeof node === 'function' ? node() : node;
  if (!attachNode) {
    return document.body;
  }

  if (isString(attachNode)) {
    return document.querySelector(attachNode) || document.body;
  }

  if (attachNode instanceof HTMLElement) {
    return attachNode;
  }

  return document.body;
};
