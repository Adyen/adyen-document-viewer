export const formatId = (id: string) => {
  if (!id) return;
  const strippedId = id.replace(/[^\w-]/g, '');
  return `adyen-document-viewer-${strippedId}`;
};
