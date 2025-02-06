import { SitemapStream, streamToPromise } from 'sitemap';

import { Source } from '../../types';

export const generateSitemap = async (payload: {
  hostname: string;
  sources: Source[];
}) => {
  const { hostname, sources } = payload;

  const sitemap: string = await new Promise((resolve) => {
    // Creates a sitemap object given the input configuration with URLs
    const sitemap = new SitemapStream({
      hostname,
    });

    sources.forEach((source) => {
      if (source.meta?.absPath) {
        sitemap.write({
          url: `${source.meta.absPath}/`.replace(/\/\//g, '/'),
          lastmod: new Date(),
        });
      }
    });

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
