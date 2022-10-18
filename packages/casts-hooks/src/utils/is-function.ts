export function isFunction(
  obj: unknown,
): obj is (...args: unknown[]) => boolean {
  return typeof obj === 'function';
}
