import { FC, RefObject, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { rdProvider } from 'virtual:rd-provider';

export type RoutesProps = {
  containerRef?: RefObject<HTMLDivElement>;
};

export const Routes: FC<RoutesProps> = (props) => {
  const { containerRef } = props;
  const { routes } = rdProvider;
  const element = useRoutes(routes);

  /** scroll to url hash */
  useEffect(() => {
    if (!containerRef?.current) {
      return;
    }

    const { hash } = window.location;
    if (!hash) {
      return;
    }

    const target = containerRef.current.querySelector(decodeURIComponent(hash));
    if (!target) {
      return;
    }
    target.scrollIntoView(true);
  }, [element, containerRef]);

  return element;
};
