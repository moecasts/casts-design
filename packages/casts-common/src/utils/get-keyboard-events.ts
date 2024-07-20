import { KeyboardEvent } from 'react';
import { isArray } from 'lodash-es';

export type KeyCode = string;
export type KeyCodes = KeyCode | KeyCode[];

export type GetKeyboardEvents = Array<
  [KeyCodes, (event: KeyboardEvent) => void]
>;

type KeyboardEventMap = Record<
  KeyCode,
  (event: KeyboardEvent | KeyboardEvent<HTMLElement>) => void
>;

/**
 * confirm key (Space/Enter/NumberEnter)
 */
export const KEYCODE_CONFIRM = ['Space', 'Enter', 'NumberEnter'];

export const getKeyboardEvents = (payload: GetKeyboardEvents) => {
  const eventMap = payload.reduce((eventMap, item) => {
    const [keyCodes, handler] = item;

    const itemEventMap = (isArray(keyCodes) ? keyCodes : [keyCodes]).reduce(
      (innerMap, keyCode) => ({
        ...innerMap,
        [keyCode]: handler,
      }),
      {} as KeyboardEventMap,
    );

    return {
      ...eventMap,
      ...itemEventMap,
    };
  }, {} as KeyboardEventMap);

  return (event: KeyboardEvent) => {
    return eventMap[event.code]?.(event);
  };
};
