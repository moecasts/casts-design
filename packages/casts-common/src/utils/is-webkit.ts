import { isChrome } from './is-chrome';
import { testUserAgent } from './test-user-agent';

export function isWebKit() {
  return testUserAgent(/AppleWebKit/i) && !isChrome();
}
