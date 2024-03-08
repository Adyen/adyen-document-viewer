export const getScrollParent = (node) => {
  const isElement = node instanceof HTMLElement;
  const overflowY = isElement && window.getComputedStyle(node).overflowY;
  const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

  if (!node) {
    return -1;
  } else if (isScrollable) {
    return node;
  }

  return getScrollParent(node.parentNode) || document.body;
};
