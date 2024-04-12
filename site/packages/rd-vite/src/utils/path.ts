import { filter, identity, isEmpty } from 'lodash-es';

import { fallbackLocaleCode, localeCodes } from '../common';

export function ensureRelativePath(relativePath: string) {
  // prefix . for same-level path
  if (!relativePath.startsWith('.')) {
    relativePath = `./${relativePath}`;
  }
  return relativePath;
}

export const ensureSlashStartPath = (path: string) => {
  if (path.startsWith('/')) {
    return path;
  }
  return `/${path}`;
};

/**
 * parse source item
 * @param {any} item - source item
 */
export const parsePath = (item: any) => {
  const localesRE = new RegExp(`\\.(${localeCodes.join('|')})$`);
  const routePathRE = new RegExp('(docs|src)([\\/\\w\\d\\-_\\.]+)?.md');
  const routePath = routePathRE.exec(item.id)?.[2] || '';

  let paths = routePath.split('/');
  const namePath = paths[paths.length - 1];

  paths = paths.slice(0, -1);

  const metaPath = (item.meta.nav?.path || '') + (item.meta.group?.path || '');

  if (metaPath) {
    const clearMetaPath = filter(metaPath.split('/'), identity);

    paths.splice(0, 0, ...clearMetaPath);
  }

  const locale = localesRE.exec(namePath)?.[1];

  paths.push(namePath.replace(localesRE, ''));

  paths = filter(paths, (p) => !isEmpty(p));

  const prefix = locale && locale !== fallbackLocaleCode ? `/${locale}` : '';
  paths.splice(0, 0, prefix);

  return { paths, locale: locale || fallbackLocaleCode };
};
