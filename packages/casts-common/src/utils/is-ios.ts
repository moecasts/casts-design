import { isIPad } from './is-ipad';
import { isIPhone } from './is-iphone';

export function isIOS() {
  return isIPhone() || isIPad();
}
