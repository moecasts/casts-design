export const isObject = (obj: unknown): obj is object => {
  const type = typeof obj;
  return obj != null && (type === 'object' || type === 'function');
};
