import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  filter,
  getOffsetTop,
  getScroll,
  isEmpty,
  scrollTo,
} from '@casts/common';

import {
  AnchorContextValue,
  AnchorProviderProps,
  UseAnchorProviderProps,
} from './types';

export const AnchorContext = createContext<AnchorContextValue>({} as any);

export const useAnchorContext = () => useContext(AnchorContext);

export const AnchorProvider: FC<AnchorProviderProps> = (props) => {
  const { children } = props;

  const value = useAnchorProvider(props);

  return (
    <AnchorContext.Provider value={value}>{children}</AnchorContext.Provider>
  );
};

const linkRegex = /#([\S ]+)$/;

export const useAnchorProvider = (props: UseAnchorProviderProps) => {
  const { scrollOffsetY = 0 } = props;

  const container = window;
  const [links, setLinks] = useState<string[]>([]);

  const [activeLink, setActiveLink] = useState<string>();

  const animatingRef = useRef(false);
  /* --------------------------------- handle links ---------------------------------------- */
  const addLink = (link: string) => {
    if (links.includes(link)) {
      return;
    }

    setLinks((prev) => [...prev, link]);
  };

  const removeLink = (link: string) => {
    if (!links.includes(link)) {
      return;
    }

    setLinks((prev) => filter(prev, link));
  };

  /* --------------------------------- handle scroll events ---------------------------------------- */
  const handleScroll = useCallback(() => {
    if (isEmpty(links) || animatingRef.current) {
      return;
    }

    const activeLink = getCurrentActiveLink(links);
    setActiveLink(activeLink);
  }, [links]);

  const setCurrentActiveLink = (link: string) => {
    handleScrollTo(link);
  };

  const handleScrollTo = (link: string) => {
    setActiveLink(link);
    const linkMatch = linkRegex.exec(link);
    if (!linkMatch) {
      return;
    }

    const target = document.querySelector(link) as HTMLElement | undefined;
    if (!target) {
      return;
    }

    const scrollTop = getScroll(container, true);
    const elementOffsetTop = getOffsetTop(target, container);
    const y = scrollTop + elementOffsetTop;

    animatingRef.current = true;
    scrollTo(y + scrollOffsetY, {
      getContainer: () => window,
      callback: () => {
        animatingRef.current = false;
      },
      duration: 200,
    });
  };

  const getCurrentActiveLink = (links: string[], offsetTop = 0, bounds = 5) => {
    const linkSections: Array<{ link: string; top: number }> = [];

    links.forEach((link) => {
      const linkMatch = linkRegex.exec(link);

      if (!linkMatch) {
        return;
      }

      const target = document.querySelector(link) as HTMLElement | undefined;

      if (!target) {
        return;
      }

      const top = getOffsetTop(target, container) + scrollOffsetY;

      if (top >= offsetTop + bounds) {
        return;
      }

      linkSections.push({ link, top });
    });

    if (isEmpty(linkSections)) {
      return;
    }

    const maxSection = linkSections.reduce((prev, curr) =>
      curr.top > prev.top ? curr : prev,
    );
    return maxSection.link;
  };

  useEffect(() => {
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    activeLink,
    addLink,
    removeLink,
    setCurrentActiveLink,
  };
};
