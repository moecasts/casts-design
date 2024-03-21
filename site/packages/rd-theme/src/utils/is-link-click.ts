import { MouseEvent } from 'react';

export const isLinkClick = (e: MouseEvent<HTMLElement>) => {
  const target = e.target as HTMLElement;

  const isLink = (el: HTMLElement | null): boolean => {
    if (!el) {
      return false;
    }

    if (el.tagName === 'A') {
      return true;
    }

    return isLink(el.parentNode as HTMLElement | null);
  };

  return isLink(target);
};
