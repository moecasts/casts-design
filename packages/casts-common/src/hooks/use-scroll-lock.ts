import { useMemo } from 'react';
import { useIsomorphicLayoutEffect } from 'ahooks';

import { formatSizeUnit } from '../utils';

export type UseScrollLockProps = {
  lock?: boolean;

  container?: HTMLElement;
  scrollBarSize?: number | string;
};

export const useScrollLock = (props: UseScrollLockProps = {}) => {
  const {
    lock = false,
    scrollBarSize = 15,
    container = document?.body,
  } = props;

  const containerOriginStyles = useMemo(() => {
    if (!container) {
      return {};
    }

    return {
      overflow: container.style.overflow,
      width: container.style.width,
    };
  }, [container]);

  const handleLockStyle = (container: HTMLElement, lock: boolean) => {
    const cleanup = () => {
      container.style.overflow = containerOriginStyles.overflow || '';
      container.style.width = containerOriginStyles.width || '';
    };

    if (lock) {
      container.style.overflow = 'hidden';
      container.style.width = `calc(${
        container.style.width || '100%'
      } - ${formatSizeUnit(scrollBarSize)})`;

      // should reset container style after hook update or destroy
      return cleanup;
    }

    return cleanup();
  };

  useIsomorphicLayoutEffect(() => {
    if (container) {
      return handleLockStyle(container, lock);
    }
  }, [lock]);
};
