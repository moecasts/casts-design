import { testPlatform } from './test-platform';

export function isMac() {
  return testPlatform(/^Mac/i);
}
