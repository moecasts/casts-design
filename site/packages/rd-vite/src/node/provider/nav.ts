import { Navigators } from '@casts/rd-vite/types/navigator';
import { capitalize, find, has, last } from 'lodash-es';

import { Source, SourceMeta } from '../../types';
import { parsePath } from '../../utils/path';

export const getNavFromSource = (source: Source) => {
  const { paths } = parsePath(source);

  const metaNav: SourceMeta['nav'] = source.meta?.nav;

  const nav = {
    ...metaNav,
    title: source.meta?.nav?.title || capitalize(last(paths)),
    path: (metaNav?.path ? paths.slice(0, -1) : paths).join('/'),
  };

  return nav;
};

export type GetNavigatorsPayload = {
  sources: Source[];
};

export const getNavigators = ({ sources }: GetNavigatorsPayload) => {
  const localesNav: Navigators = {};
  sources
    .filter((s) => has(s.meta, 'nav'))
    .forEach((source) => {
      const { locale } = parsePath(source);
      const navList = localesNav[locale] || (localesNav[locale] = []);

      const nav = getNavFromSource(source);

      if (nav.title && find(navList, { title: nav.title })) {
        return;
      }

      navList.push(nav);
    });

  return localesNav;
};
