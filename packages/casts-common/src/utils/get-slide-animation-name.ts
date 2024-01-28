/**
 * get slide animation name
 *
 * @param {boolean} visible - is element will be visible
 * @param {string} placement - animation slide direction
 * @returns {string} animation name
 */
export const getSlideAnimationName = (
  visible: boolean,
  placement: string,
): string => {
  const placementSplitted = placement?.split('-');

  if (placementSplitted.includes('left')) {
    return visible
      ? 'animate-enter-left-to-right'
      : 'animate-leave-right-to-left';
  }
  if (placementSplitted.includes('right')) {
    return visible
      ? 'animate-enter-right-to-left'
      : 'animate-leave-left-to-right';
  }
  if (placementSplitted.includes('bottom')) {
    return visible
      ? 'animate-enter-bottom-to-top'
      : 'animate-leave-top-to-bottom';
  }

  return visible
    ? 'animate-enter-top-to-bottom'
    : 'animate-leave-bottom-to-top';
};
