import { find, isEmpty } from 'lodash-es';
import { RouteObject } from 'react-router-dom';
import { SitemapStream, streamToPromise } from 'sitemap';

import { ResolveFunction, Source } from '../../types';
import { parsePath } from '../../utils';
import { orderRoutes } from '../../utils/order-routes';
import { getNavFromSource } from './nav';

export type DetectMarkdownsOptions = {
  withMeta?: boolean;
  resolve?: ResolveFunction;
};

export const generateRoutes = ({ sources }: { sources: Source[] }) => {
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

      // NOTE: index route must be a leaf
      if (isLeaf) {
        const currentRoute: RouteObject = {
          path: isIndex ? absPath : p,
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
          meta: item.meta,
        };

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        standaloneCodeBlockRoute.children!.push(currentRoute);
      });
    }
  });

  return orderRoutes(routes);
};

export const generateSitemap = async (payload: {
  hostname: string;
  routes: RouteObject[];
}) => {
  const { hostname, routes } = payload;

  const sitemap: string = await new Promise((resolve) => {
    // Creates a sitemap object given the input configuration with URLs
    const sitemap = new SitemapStream({
      hostname,
    });

    const dfs = (routes: RouteObject[]) => {
      for (const route of routes) {
        if (route?.meta?.absPath) {
          sitemap.write({
            url: `${route?.meta?.absPath}/`.replace(/\/\//g, '/'),
            lastmod: new Date(),
          });
        }

        if (route.children && route.children?.length > 0) {
          dfs(route.children);
        }
      }
    };

    dfs(routes);
    sitemap.end();

    streamToPromise(sitemap)
      .then((sm) => resolve(sm.toString()))
      .catch((error) => {
        console.error(error);
        resolve('');
      });
  });

  return sitemap;
};
