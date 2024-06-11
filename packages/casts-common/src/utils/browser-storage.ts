import { isBrowser } from './is-browser';

/**
 * Safely operate window.localStorage and sessionStorage
 * Incognito mode and some Android clients may disable localStorage
 * Leading to exceptions like Cannot read property 'getItem' of null
 */
export class BrowserStorage<T> {
  /**
   * Storage key
   */
  key: string;
  /**
   * Storage type, supports localStorage and sessionStorage
   */
  storage: Storage | undefined;

  constructor(key: string, isSession?: boolean) {
    this.key = key;
    if (isBrowser()) {
      this.storage = isSession ? window.sessionStorage : window.localStorage;
    }
  }

  set(input: T) {
    try {
      this.storage?.setItem(this.key, JSON.stringify(input));
    } catch (error) {
      this.errorHandler(error);
    }
  }

  get(): T | null {
    let result = null;

    try {
      /** @ts-ignore Browser supports JSON.parse(null) behavior, ts definition only supports string is inaccurate */
      result = JSON.parse(this.storage?.getItem(this.key));
    } catch (error) {
      this.errorHandler(error);
    }

    return result;
  }

  remove() {
    try {
      this.storage?.removeItem(this.key);
    } catch (error) {
      this.errorHandler(error);
    }
  }

  /**
   * Local development and testing environment, output exception information for debugging
   */
  protected errorHandler(error: unknown) {
    console.error(error);
  }
}
