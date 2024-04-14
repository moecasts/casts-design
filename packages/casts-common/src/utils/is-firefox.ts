import { testUserAgent } from './test-user-agent';

export function isFirefox() {
  return testUserAgent(/Firefox/i);
}
