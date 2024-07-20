import { isFunction, isObject, isString } from 'lodash-es';
import type { MutableRefObject } from 'react';

import { isCanUseDocument } from './is-can-use-document';

type TargetValue<T> = T | undefined | null;

type TargetType = HTMLElement | Element | Window | Document | string;

export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;

export function getTargetElement<T extends TargetType>(
  target: BasicTarget<T>,
  defaultElement?: T,
) {
  if (!isCanUseDocument()) {
    return undefined;
  }

  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetValue<T>;

  if (isFunction(target)) {
    targetElement = target();
  } else if (isObject(target) && 'current' in target) {
    targetElement = target.current;
  } else if (isString(target)) {
    targetElement = document.querySelector(target) as TargetValue<T>;
  } else {
    targetElement = target as TargetValue<T>;
  }

  return targetElement;
}
