import { testPlatform } from './test-platform';

export function isIPhone() {
  return testPlatform(/^iPhone/i);
}
