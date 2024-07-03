import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { render } from './dist/server/entry-server.js';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory

const OUT_DIR = join(__dirname, './dist');

const prerender = async () => {
  const indexTemplate = readFileSync(join(OUT_DIR, './index.html'), 'utf-8');

  const routes = JSON.parse(
    readFileSync(join(OUT_DIR, './routes-manifest.json'), 'utf-8'),
  );

  const generate = async (route) => {
    if (route === '/') {
      return;
    }

    try {
      const result = await render(route);

      const { html } = result;

      const finalHtml = indexTemplate.replace('<!--app-html-->', html);

      const writeFileDir = join(OUT_DIR, `.${route}`);
      const writeFilePath = join(writeFileDir, '', 'index.html');

      mkdirSync(writeFileDir, { recursive: true });

      writeFileSync(writeFilePath, finalHtml);
    } catch (error) {
      console.log('debug1', {
        route,
        error,
      });
    }
  };

  const dfs = (routes) => {
    for (const route of routes) {
      if (route?.meta?.absPath) {
        generate(route.meta.absPath);
      }

      if (route.children && route.children?.length > 0) {
        dfs(route.children);
      }
    }
  };

  dfs(routes);
};

prerender();
