import { FC, useEffect } from 'react';
import { head, last } from '@casts/common';
import {
  matchRoutes,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { rdProvider } from 'virtual:rd-provider';

// eslint-disable-next-line @typescript-eslint/ban-types
export const NonLeafRouteOutlet: FC<{}> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const matches = matchRoutes(rdProvider.routes, location);
    const currentRoute = last(matches)?.route;

    if (currentRoute?.children) {
      const to = head(currentRoute.children)?.meta?.absPath;
      to && navigate(to);
    }
  }, [location, navigate]);

  return <Outlet />;
};
