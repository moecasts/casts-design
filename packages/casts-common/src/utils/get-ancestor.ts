/**
 * 在 rootCls 内，找到 cls 祖先
 * @param el 当前元素
 * @param cls 目标元素 cls
 * @param rootCls 最外层 cls
 * @returns HTMLElement
 */
export const getAncestor = (
  el: HTMLElement,
  cls: string,
  rootCls?: string,
): HTMLElement | null => {
  const node = el.parentNode as HTMLElement;

  if (!node) {
    return null;
  }
  if (node.classList?.contains(cls)) {
    return node;
  }
  if (rootCls && node.classList?.contains(rootCls)) {
    return null;
  }
  return getAncestor(node, cls, rootCls);
};
