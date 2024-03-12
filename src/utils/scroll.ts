export const getScrollParent = (node: Node | null): HTMLElement | null => {
  if (!node) return null;

  const isElement = node instanceof HTMLElement;
  const overflowY = isElement && window.getComputedStyle(node).overflowY;
  const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

  if (isElement && isScrollable) return node;

  return getScrollParent(node.parentNode) ?? document.body;
};
