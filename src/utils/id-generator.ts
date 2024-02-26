let idCounter = Date.now();

export const getUniqueId = (prefix = 'id') => {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
};
