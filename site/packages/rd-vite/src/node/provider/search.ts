import { readFileSync } from 'fs';
import { reduce } from 'lodash-es';

import { fallbackLocaleCode, localeCodes } from '../../common';
import { SearchItem, Source } from '../../types';

export const generateSearchData = (sources: Source[]) => {
  const data = reduce(
    sources,
    (acc, source) => {
      if (!source.id || !source.meta?.title || !source.meta?.absPath) {
        return acc;
      }

      const path = source.path;
      const content = readFileSync(path, 'utf-8');

      const localesRE = new RegExp(`\\.(${localeCodes.join('|')}).mdx?$`);
      const locale = localesRE.exec(source.id)?.[1] || fallbackLocaleCode;

      const item = {
        id: source.id,
        title: source.meta.title,
        content,
        route: source.meta.absPath,
        localeCode: locale,
        toc:
          (source.meta.toc as unknown as boolean) === false
            ? undefined
            : source.data.toc,
      };

      return {
        ...acc,
        [source.id]: item,
      };
    },
    {} as Record<string, SearchItem>,
  );

  return data;
};
