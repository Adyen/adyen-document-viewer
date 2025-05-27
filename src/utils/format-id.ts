export const formatId = (id: string) => {
  if (!id) return;
  const strippedId = id.replace(/[^\w-]/g, '').slice(0, 32);
  return `adyen-document-viewer-${strippedId}`;
};
