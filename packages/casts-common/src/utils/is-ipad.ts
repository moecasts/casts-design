import { isMac } from './is-mac';
import { testPlatform } from './test-platform';

export function isIPad() {
  return (
    testPlatform(/^iPad/i) ||
    // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    (isMac() && navigator.maxTouchPoints > 1)
  );
}
