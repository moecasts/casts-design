import rehypeToc from '@jsdevtools/rehype-toc';
import { compileSync } from '@mdx-js/mdx';
import fg from 'fast-glob';
import { isEmpty, reduce } from 'lodash-es';
import path from 'path';
import rehypeSlug from 'rehype-slug';
import { readSync } from 'to-vfile';
import { matter } from 'vfile-matter';
import { normalizePath } from 'vite';

import {
  ResolveFunction,
  Source,
  SourceData,
  SourceMeta,
  TocItem,
} from '../../types';
import { parsePath } from '../../utils';
import { remarkCodeBlockReplacer } from '../remarks';
import { remarkCodeBlockStandalone } from '../remarks/code-block';
import { remarkToc } from '../remarks/toc';

export type DetectMarkdownsOptions = {
  withMeta?: boolean;
  resolve?: ResolveFunction;
};

const defaultDetectMarkdownsOptions: Partial<DetectMarkdownsOptions> = {
  withMeta: true,
};

export const detectMarkdowns = (
  root: string,
  options: DetectMarkdownsOptions = {},
) => {
  const { withMeta } = Object.assign(defaultDetectMarkdownsOptions, options);

  const indexRE = /index$/;

  const paths = fg
    .sync(['**/docs/**/[^_]*.@(md|mdx)', '**/src/**/[^_]*.@(md|mdx)'], {
      cwd: root,
      ignore: ['**/node_modules/**'],
    })
    .map((p) => {
      const item: Source = {
        id: normalizePath(p),
        path: normalizePath(path.posix.join(root, p)),
        data: {},
      };
      if (withMeta) {
        const file = readSync(item.path);
        matter(file);
        item.meta = (file.data?.matter || {}) as SourceMeta;

        // generate absPath
        const { paths } = parsePath(item);
        const isIndex = indexRE.test(p);
        const absPath = isIndex
          ? paths.slice(0, -1).join('/') || '/'
          : paths.join('/');
        (item.meta ||= {}).absPath = absPath;

        const compiledFile = compileSync(file, {
          remarkPlugins: [
            remarkToc,
            remarkCodeBlockReplacer,
            remarkCodeBlockStandalone,
          ],
          rehypePlugins: [rehypeSlug, rehypeToc],
          format: 'mdx',
        });

        if (!isEmpty(compiledFile.data.standaloneCodeBlocks)) {
          item.data.standaloneCodeBlocks = reduce(
            compiledFile.data
              .standaloneCodeBlocks as SourceData['standaloneCodeBlocks'],
            (acc, blockSource, id) => ({
              ...acc,
              [id]: normalizePath(blockSource),
            }),
            {},
          );
        }

        if (item.meta?.toc !== false && compiledFile.data.toc) {
          item.data.toc = compiledFile.data.toc as TocItem[];
        }
      }

      return item;
    });

  return paths;
};
