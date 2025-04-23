import { flushSync } from 'react-dom';

/**
 * quadrilateral style view transition
 */
export const useQuadrilateralTransition = () => {
  const quadrilateralTransition = async (payload: { update: () => void }) => {
    const { update } = payload;
    /**
     * Return early if View Transition API is not supported
     * or user prefers reduced motion
     */
    if (
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

    document.documentElement.animate(
      {
        clipPath: [
          `polygon(calc((tan(8deg) * 100vh) + 100%) 0,
                calc((tan(8deg) * 100vh) + 100%) 0,
                100% 100%,
                100% 100%)`,
          `polygon(0 0,
                calc((tan(8deg) * 100vh) + 100%) 0,
                100% 100%,
                calc(tan(8deg) * -100vh) 100%)`,
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
    quadrilateralTransition,
  };
};
