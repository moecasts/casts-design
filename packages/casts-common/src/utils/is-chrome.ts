import { testUserAgent } from './test-user-agent';

export function isChrome() {
  return testUserAgent(/Chrome/i);
}
