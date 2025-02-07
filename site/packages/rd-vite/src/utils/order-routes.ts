import { orderBy, reduce } from 'lodash-es';
import { RouteObject } from 'react-router-dom';

export const orderRoutes = (routes: RouteObject[]) => {
  const internalOrder = (routes: RouteObject[]) => {
    const groupAndOrder = reduce(
      routes,
      (acc, route) => {
        if (!route.meta?.group) {
          return acc;
        }

        const group = {
          ...acc[route.meta.group.title],
          ...route.meta.group,
        };

        return {
          ...acc,
          [route.meta?.group.title]: group,
        };
      },
      {} as Record<string, Record<string, any>>,
    );

    const fillGroupOrder = (routes: RouteObject[]) =>
      routes.map((route) => {
        const newRoute = { ...route };

        if (newRoute.meta?.group) {
          newRoute.meta.group.order =
            groupAndOrder[newRoute.meta.group.title].order;
        }

        return newRoute;
      });

    return orderBy(fillGroupOrder(routes), [
      'meta.group.order',
      'meta.order',
    ]).map((route) => {
      if (route.children) {
        route.children = internalOrder(route.children);
      }
      return route;
    });
  };

  return internalOrder(routes);
};
