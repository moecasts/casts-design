import { useIsomorphicLayoutEffect } from 'ahooks';
import ripplet, { RippletOptions } from 'ripplet.js';

import { BasicTarget, getTargetElement } from '../utils';

export type RippleOptions = { disabled?: boolean } & Partial<RippletOptions>;

export const defaultRippleOptions: RippleOptions = {
  disabled: false,
  clearing: false,
  spreadingDuration: '300ms',
  clearingDuration: '500ms',
};
/**
 * click ripple
 *
 * @param {BasicTarget} target
 * @param {Partial<RippletOptions>} [options]
 */
export const useRipple = (target: BasicTarget, options: RippleOptions = {}) => {
  const { disabled = false, ...rippletOptions } = {
    ...defaultRippleOptions,
    ...options,
  };
  useIsomorphicLayoutEffect(() => {
    const el = getTargetElement(target) as HTMLElement;
    if (!el || disabled) {
      return;
    }

    const handleAddRipple = (event: PointerEvent) => {
      // NOTE: disabled element should not show ripple
      if (disabled) {
        return;
      }
      const { clientX, clientY } = event as PointerEvent;
      // FIX: ripple boundary wrong when width is changed
      const DELAY = 100;
      setTimeout(() => {
        ripplet({ currentTarget: el, clientX, clientY }, rippletOptions);
      }, DELAY);

      const handleClearRipple = () => {
        if (!el) {
          return;
        }

        setTimeout(() => {
          ripplet.clear(el);
        }, DELAY);

        el.removeEventListener('pointerup', handleClearRipple, false);
        el.removeEventListener('pointerleave', handleClearRipple, false);
      };

      el.addEventListener('pointerup', handleClearRipple, false);
      el.addEventListener('pointerleave', handleClearRipple, false);
    };

    el.addEventListener('pointerdown', handleAddRipple, false);
    return () => {
      el.removeEventListener('pointerdown', handleAddRipple, false);
    };
  }, [options, target]);
};
