import { ReactNode } from 'react';
import {
  findKey,
  findNodeByPathDFS,
  groupBy,
  map,
  reduce,
  sortBy,
} from '@casts/common';
import { MenuObject } from '@casts/menu';
import { matchRoutes, RouteObject } from 'react-router-dom';

import { LocaleCodes } from '../../common';

/** convert route to menu item */
const routeToMenuObject = (route: RouteObject): MenuObject => ({
  key: route.meta?.title as string,
  label: route.meta?.title as ReactNode,
  href: route.meta?.absPath,
  value: route.meta?.absPath,
});

export const getMenuDataFromRoute = (payload: {
  routes: RouteObject[];
  matches: ReturnType<typeof matchRoutes>;
  localeCode?: LocaleCodes[0];
}) => {
  const { routes, matches } = payload;

  if (!matches) {
    return [];
  }

  const currentRouteMetaNavPath = (
    matches[matches.length - 1]?.route as RouteObject
  )?.meta?.nav?.path;

  const parentPath = `${currentRouteMetaNavPath ?? ''}`;

  const parentMatches = matchRoutes(routes, parentPath);

  const currentLevelRoute = findNodeByPathDFS({
    tree: routes,
    path: map(parentMatches, 'route'),
    prop: 'path',
  });

  const makeMenuDataFromRoutes = ({ routes }: { routes: RouteObject[] }) => {
    const groups = groupBy(routes, 'meta.group.title');

    const data: MenuObject[] = reduce(
      groups,
      (acc, item, title) => {
        if (title === 'undefined') {
          return [
            ...acc,
            ...reduce(
              item,
              (acc, child) => {
                if (child.children) {
                  return [
                    ...acc,
                    ...makeMenuDataFromRoutes({ routes: child.children }),
                  ];
                }

                return [...acc, routeToMenuObject(child)];
              },

              [] as MenuObject[],
            ),
          ];
        }

        const group: MenuObject & { order?: string } = {
          type: 'group',
          key: title,
          label: title,
          children: map(item, routeToMenuObject),
          order: findKey(item, 'meta.group.order'),
        };

        return [...acc, group];
      },
      [] as MenuObject[],
    );

    return sortBy(data, ['order', 'title']);
  };

  return makeMenuDataFromRoutes({
    routes: currentLevelRoute?.children,
  });
};
