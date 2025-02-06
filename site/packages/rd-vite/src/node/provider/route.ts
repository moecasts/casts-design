import { createElement, lazy } from 'react';
import { find, isEmpty } from 'lodash-es';
import { RouteObject } from 'react-router-dom';

import { RuntimeImport, Source } from '../../types';
import { orderRoutes } from '../../utils/order-routes';
import { ensureSlashStartPath, parsePath } from '../../utils/path';
import { getNavFromSource } from './nav';

const NonLeafRouteOutlet = lazy(() =>
  import('../../client/components').then(({ NonLeafRouteOutlet }) => ({
    default: NonLeafRouteOutlet,
  })),
);

export type GenerateRoutesPayload = {
  sources: Source[];
  runtimeImports: Record<string, RuntimeImport>;
};

export const getRoutes = ({
  sources,
  runtimeImports,
}: GenerateRoutesPayload) => {
  const indexRE = /index$/;
  const routes: RouteObject[] = [];

  sources.forEach((item: Source) => {
    const { paths } = parsePath(item);

    let currentLevelRoutes = routes;

    paths.forEach((p, index) => {
      const isLeaf = index === paths.length - 1;
      const isIndex = indexRE.test(p);

      const absPath = isIndex
        ? paths.slice(0, -1).join('/') || '/'
        : paths.join('/');

      const currentComponent =
        runtimeImports[ensureSlashStartPath(item.path)].import;

      // NOTE: index route must be a leaf
      if (isLeaf) {
        const currentRoute: RouteObject = {
          path: isIndex ? absPath : p,
          element: createElement(lazy(currentComponent)),
          index: isIndex,
          meta: {
            absPath,
            ...item.meta,
          },
        };

        if (currentRoute.meta) {
          currentRoute.meta.nav = getNavFromSource(item);
        }

        currentLevelRoutes.push(currentRoute);
        return;
      }

      const currentRoute: RouteObject | undefined = currentLevelRoutes.find(
        (r) => r.path === (p || '/'),
      );
      const children: RouteObject[] = currentRoute?.children || [];

      if (!currentRoute) {
        const currentRoute: RouteObject = {
          path: p || '/',
          children,
          element: createElement(NonLeafRouteOutlet),
        };

        currentLevelRoutes.push(currentRoute);
      }

      // go to next level
      currentLevelRoutes = children;
    });

    /* --------------------------------- generate standalone demo routes ---------------------------------------- */
    if (!isEmpty(item.data.standaloneCodeBlocks)) {
      const STANDALONE_CODE_BLOCK_ROUTE_PREFIX = '/~demo';

      let standaloneCodeBlockRoute: RouteObject = find(routes, {
        path: STANDALONE_CODE_BLOCK_ROUTE_PREFIX,
      }) as RouteObject;

      if (!standaloneCodeBlockRoute) {
        standaloneCodeBlockRoute = {
          path: STANDALONE_CODE_BLOCK_ROUTE_PREFIX,
          children: [],
        };

        routes.push(standaloneCodeBlockRoute);
      }

      Object.values(item.data.standaloneCodeBlocks).forEach((blockSource) => {
        const currentRoute: RouteObject = {
          path: blockSource
            .replace('.tsx', '')
            .replace(/(\.)+\/?/g, '')
            .replace(/\//g, '-'),
          element: createElement('span', {}, 'test'),
          meta: item.meta,
        };

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        standaloneCodeBlockRoute.children!.push(currentRoute);
      });
    }
  });

  return orderRoutes(routes);
};
