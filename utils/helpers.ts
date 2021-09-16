/**
 * Checks if `val` is a plain object in JavaScript
 */
export function isObject(val: unknown): boolean {
  return typeof val === 'object' && typeof val !== 'function' && val !== null && !Array.isArray(val);
}
