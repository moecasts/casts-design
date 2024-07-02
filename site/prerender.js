import { render } from './dist/server/entry-server.js';

const prerender = () => {
  const routes = [
    // {
    //   path: '/components/button',
    // },
    {
      path: '/',
    },
  ];

  const generate = async (route) => {
    const result = await render(route.path);

    const { html } = result;

    console.log('debug1', html);
  };

  const dfs = (routes) => {
    for (const route of routes) {
      generate(route);

      if (route.children && route.children?.length > 0) {
        dfs(route.children);
      }
    }
  };

  dfs(routes);
};

prerender();
