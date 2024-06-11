/**
 * get element styles
 *
 * @param {HTMLElement} element
 * @returns {CSSStyleDeclaration | null}
 */
export const getStyle = (element: HTMLElement): CSSStyleDeclaration | null => {
  if (!element) {
    return null;
  }

  try {
    if (document.defaultView) {
      const computed = document.defaultView.getComputedStyle(element, '');
      return computed;
    }
  } catch (e) {
    return element.style;
  }

  return null;
};
