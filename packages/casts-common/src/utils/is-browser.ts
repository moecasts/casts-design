/**
 * Check if the code is running on the browser.
 * @returns {boolean} true if the code is running on the browser.
 */
export const isBrowser = (): boolean => typeof window !== 'undefined';
