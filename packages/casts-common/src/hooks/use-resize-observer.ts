import { useIsomorphicLayoutEffect } from 'ahooks';
import ResizeObserver from 'resize-observer-polyfill';

import { BasicTarget, getTargetElement } from '../utils/get-target-element';

export const useResizeObserver = (
  target: BasicTarget,
  callback: (entries: ResizeObserverEntry) => void,
) => {
  useIsomorphicLayoutEffect(() => {
    const el = getTargetElement(target);

    if (!el) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    });
    resizeObserver.observe(el);
    return () => {
      resizeObserver.disconnect();
    };
  }, [callback, target]);
};
