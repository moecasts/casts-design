import { useEffect, useRef } from 'react';
import { getAllOccurrences } from '@casts/common';
import { SearchItem } from '@casts/rd-vite/types';
import FlexSearch, {
  EnrichedDocumentSearchResultSetUnit,
  EnrichedDocumentSearchResultSetUnitResultUnit,
} from 'flexsearch';
import { each, isEmpty, reduce } from 'lodash-es';
import { nanoid } from 'nanoid';

import { transformMarkdownToPlainText } from '../utils/markdown';
import { useRd } from './use-rd';

export type MatchedResultItem = {
  type: 'title' | 'header' | 'content';
  id: string | number;
  route: string;
  statement: string;
  highlightInfoList: Array<{
    start: number;
    length: number;
  }>;
  title?: string;
};

export type SearchHitResult =
  EnrichedDocumentSearchResultSetUnitResultUnit<SearchItem> & {
    field: string;
  };

const createSearcher = (props: {
  data: Record<string, SearchItem>;
  localeCode: string;
}) => {
  const { data, localeCode } = props;
  const initSearchDocument = (data: Record<string, SearchItem>) => {
    const document = new FlexSearch.Document({
      document: {
        id: 'id',
        index: ['title', 'content'],
        store: ['title', 'content', 'route', 'toc'],
      },
      tokenize: 'full',
      // charset: 'latin:extra',
    });

    each(data, (item) => {
      if (item.localeCode !== localeCode) {
        return;
      }

      document.add(item);
    });

    return document;
  };

  const document = initSearchDocument(data);

  const formatSearchHitResult = (
    resultSet: FlexSearch.EnrichedDocumentSearchResultSetUnit<SearchItem>,
  ): SearchHitResult[] => {
    return resultSet.result.map((item) => ({
      ...item,
      field: resultSet.field,
    }));
  };

  const match = (query: string) => {
    const searchResult = document.search(query, {
      limit: 10,
      enrich: true,
    }) as unknown as EnrichedDocumentSearchResultSetUnit<SearchItem>[];

    const getMatchedResultItems = (
      item: SearchHitResult,
    ): MatchedResultItem[] => {
      const sets = new Set<MatchedResultItem>();

      if (item.field === 'title') {
        const matchTitle = () => {
          const statement = item.doc.title;

          const positions = getAllOccurrences(statement, query);

          const highlightInfoList = positions.map((start) => ({
            start,
            length: query.length,
          }));

          const result: MatchedResultItem = {
            type: 'title',
            id: nanoid(),
            // id: `${item.field}-${item.id}`,
            route: item.doc.route,
            statement,
            highlightInfoList,
          };

          sets.add(result);
        };

        matchTitle();
      }

      if (item.field === 'content') {
        const matchToc = () => {
          if (!item.doc.toc) {
            return;
          }

          item.doc.toc.forEach((tocItem) => {
            const positions = getAllOccurrences(tocItem.text, query);

            if (isEmpty(positions)) {
              return;
            }

            const highlightInfoList = positions.map((start) => ({
              start,
              length: query.length,
            }));

            const result: MatchedResultItem = {
              type: 'header',
              id: nanoid(),
              // id: `${item.field}-${item.id}`,
              route: `${item.doc.route}#${tocItem.id}`,
              statement: tocItem.text,
              highlightInfoList,
              title: item.doc.title,
            };

            sets.add(result);
          });
        };
        const matchContent = () => {
          const matterRegex = /---[\s\S]*?---\s*/;
          const atxRegex = /^#{1,6}\s(.*)$/gm;

          const originalContent = item.doc.content.replace(matterRegex, '');

          // 在处理 item.doc.content 匹配时，需要先将 matter 中的 frontmatter 信息去除
          // 也去除 markdown 中的标题 #, ##, ###, ####, #####
          // const plainContent = originalContent.replace(atxRegex, '');
          const plainContent = transformMarkdownToPlainText(
            originalContent.replace(atxRegex, ''),
          );

          const queryIndex = plainContent.indexOf(query);

          if (queryIndex === -1) {
            return;
          }

          const originQueryIndex = originalContent.indexOf(query);

          const allHeading = originalContent
            .slice(0, originQueryIndex)
            .match(atxRegex);

          const nearestHeadingText = allHeading?.[
            allHeading.length - 1
          ].replace(atxRegex, '$1');

          const nearestHeadingTocItem = item.doc.toc?.find(
            (tocItem) => tocItem.text === nearestHeadingText,
          );

          const statementStartIndex = Math.max(
            plainContent.slice(0, queryIndex).lastIndexOf('\n'),
            0,
          );

          const statementEndIndex =
            // if `\n\n` not found, return plainContent.length
            Math.max(
              plainContent.indexOf('\n\n', queryIndex + query.length),
              // use 0 to avoid negative value
              0,
            ) || plainContent.length;

          const statement = plainContent
            .slice(statementStartIndex, statementEndIndex)
            .trim();

          const positions = getAllOccurrences(statement, query);

          const highlightInfoList = positions.map((start) => ({
            start,
            length: query.length,
          }));

          const route = nearestHeadingTocItem
            ? `${item.doc.route}#${nearestHeadingTocItem.id}`
            : item.doc.route;

          const result: MatchedResultItem = {
            type: 'content',
            id: nanoid(),
            // id: `${item.field}-${item.id}`,
            route,
            statement,
            highlightInfoList,
            title: item.doc.title,
          };

          sets.add(result);
        };

        matchToc();
        matchContent();
      }

      return Array.from(sets);
    };

    const hits = reduce(
      searchResult,
      (result, resultSet) => {
        return [...result, ...formatSearchHitResult(resultSet)];
      },
      [] as SearchHitResult[],
    );

    const matchedResult = reduce(
      hits,
      (result, hit) => {
        const items = getMatchedResultItems(hit);

        if (isEmpty(items)) {
          return result;
        }

        return [...result, ...items];
      },
      [] as MatchedResultItem[],
    );

    return matchedResult;
  };

  return {
    match,
  };
};

export type UseSearchProps = {
  data?: Record<string, SearchItem>;
};

export const useSearch = (props: UseSearchProps = {}) => {
  const { searchData, localeCode } = useRd();

  const data = props.data || searchData;

  const searcherRef = useRef<ReturnType<typeof createSearcher>>();

  useEffect(() => {
    if (!data || !localeCode) {
      return;
    }

    searcherRef.current = createSearcher({
      data,
      localeCode,
    });
  }, [data, localeCode]);

  const search = searcherRef.current?.match || (() => []);

  return {
    search,
  };
};
