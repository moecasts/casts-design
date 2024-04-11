import { RefObject } from 'react';
import { flushSync } from 'react-dom';

/**
 * circle style view transition
 */
export const useCircleTransition = () => {
  const circleTransition = async (payload: {
    ref: RefObject<HTMLElement>;
    update: () => void;
  }) => {
    const { ref, update } = payload;
    /**
     * Return early if View Transition API is not supported
     * or user prefers reduced motion
     */
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      update();
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        update();
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 400,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      },
    );
  };

  return {
    circleTransition,
  };
};
