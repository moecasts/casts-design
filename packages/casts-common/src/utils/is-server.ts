/**
 * Check if the code is running on the server.
 * @returns {boolean} true if the code is running on the server.
 */
export const isServer = (): boolean => typeof window === 'undefined';
