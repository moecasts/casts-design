import { useCallback, useEffect, useRef, useState } from 'react';
import { isEmpty } from 'lodash-es';

type CallBackType<T> = (updatedValue: T) => void;

type SetStateType<T> = T | ((prev: T) => T);

type RetType = <T>(
  initialValue: T | (() => T),
  forceCallbackFire?: boolean,
) => [T, (newValue: SetStateType<T>, callback?: CallBackType<T>) => void];

/**
 * the hook that let you run code after a setState operation finished.
 */
const useCallbackState: RetType = <T>(
  initialValue: T | (() => T),
  forceCallbackFire?: boolean,
) => {
  const [state, _setState] = useState<T>(initialValue);
  const callbackQueue = useRef<CallBackType<T>[]>([]);
  const [updatedFlag, setUpdatedFlag] = useState({});

  const fireCallbacks = useCallback((state: T) => {
    if (isEmpty(callbackQueue.current)) {
      return;
    }
    callbackQueue.current.forEach((cb) => cb(state));
    callbackQueue.current = [];
  }, []);

  useEffect(() => {
    if (forceCallbackFire) {
      return;
    }

    fireCallbacks(state);
  }, [fireCallbacks, forceCallbackFire, state]);

  useEffect(() => {
    if (!forceCallbackFire) {
      return;
    }

    fireCallbacks(state);
  }, [fireCallbacks, forceCallbackFire, state, updatedFlag]);

  const setState = useCallback(
    (newValue: SetStateType<T>, callback?: CallBackType<T>) => {
      setUpdatedFlag({});
      _setState(newValue);
      if (callback && typeof callback === 'function') {
        callbackQueue.current.push(callback);
      }
    },
    [],
  );
  return [state, setState];
};

export { useCallbackState };
