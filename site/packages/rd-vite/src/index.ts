// @ts-ignore @mdx-js/mdx/internal-create-format-aware-processors is exported but not typed
import { createFormatAwareProcessors } from '@mdx-js/mdx/internal-create-format-aware-processors';
import { Options } from '@mdx-js/rollup';
import { transformSync } from 'esbuild';
import { readFileSync } from 'fs';
import { find, isEmpty } from 'lodash-es';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeMdxImportMedia from 'rehype-mdx-import-media';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGFM from 'remark-gfm';
import { SourceMapGenerator } from 'source-map';
import { toVFile } from 'to-vfile';
import type { Alias, PluginOption } from 'vite';

import { Locales, locales } from './common';
import { detectMarkdowns, remarkReactApi } from './node';
import { rehypeToc, remarkCodeBlock, remarkCodeBlockReplacer } from './node';
import { getRuntimeImports } from './node/provider';
import { generateSearchData } from './node/provider/search';
import { generateSitemap } from './node/provider/sitemap';
import { ResolveFunction, ResolverRef, Source } from './types';
import { customizeTOC } from './utils';

const getMdxOptions = ({
  resolverRef,
  root,
}: {
  resolverRef: ResolverRef;
  root?: string;
}): Options => ({
  providerImportSource: '@mdx-js/react',
  mdxExtensions: ['.mdx', '.md'],
  format: 'mdx',
  remarkPlugins: [
    remarkFrontmatter,
    remarkGFM,
    remarkCodeBlockReplacer,
    [remarkCodeBlock, { resolverRef, root }],
    [remarkReactApi, { resolve: resolverRef.current }],
  ],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeToc,
      {
        cssClasses: {
          toc: 'rd-toc',
        },
        headings: ['h2', 'h3', 'h4'],
        customizeTOC: customizeTOC,
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: 'rd-heading-link',
        },
        content: {
          type: 'element',
          tagName: 'svg',
          properties: {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            className: 'rd-heading-link-icon',
          },
          children: [
            {
              type: 'element',
              tagName: 'path',
              properties: {
                d: 'M13.0605 8.11073L14.4747 9.52494C17.2084 12.2586 17.2084 16.6908 14.4747 19.4244L14.1211 19.778C11.3875 22.5117 6.95531 22.5117 4.22164 19.778C1.48797 17.0443 1.48797 12.6122 4.22164 9.87849L5.63585 11.2927C3.68323 13.2453 3.68323 16.4112 5.63585 18.3638C7.58847 20.3164 10.7543 20.3164 12.7069 18.3638L13.0605 18.0102C15.0131 16.0576 15.0131 12.8918 13.0605 10.9392L11.6463 9.52494L13.0605 8.11073ZM19.778 14.1211L18.3638 12.7069C20.3164 10.7543 20.3164 7.58847 18.3638 5.63585C16.4112 3.68323 13.2453 3.68323 11.2927 5.63585L10.9392 5.98941C8.98653 7.94203 8.98653 11.1079 10.9392 13.0605L12.3534 14.4747L10.9392 15.8889L9.52494 14.4747C6.79127 11.741 6.79127 7.30886 9.52494 4.57519L9.87849 4.22164C12.6122 1.48797 17.0443 1.48797 19.778 4.22164C22.5117 6.95531 22.5117 11.3875 19.778 14.1211Z',
              },
            },
          ],
        },
      },
    ],
    rehypeMdxImportMedia,
  ],
});

export type RdConfig = {
  root?: string;
  dotRoot?: string;
  locales?: Locales;

  /**
   * Site name
   */
  name?: string;

  sitemap?: {
    /**
     * The base url of the site
     */
    hostname: string;
  };
};

export const rd = (config: RdConfig = {}) => {
  return [createPlugin(config)];
};

export const getDefaultRdConfig = (): RdConfig => ({
  locales,
});

const createPlugin = (userConfig: RdConfig = {}) => {
  const config: RdConfig = Object.assign({}, getDefaultRdConfig(), userConfig);

  const virtualModuleId = 'virtual:rd-provider';
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;

  let docRoot = config?.root || '../';
  let root: string;

  let processors: ReturnType<typeof createFormatAwareProcessors>;

  let resolve: ResolveFunction;

  let alias: Alias[];

  let markdownSources: Source[] = [];

  const plugin: PluginOption = {
    name: 'rd-vite',
    enforce: 'pre',

    config: () => ({
      resolve: {
        modules: ['@mdx-js/react'],
        alias: {
          '@root': docRoot,
          '@casts/rd-vite': path.resolve(__dirname),
        },
      },
    }),

    resolveId: (id) => {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }

      return undefined;
    },

    load(id) {
      if (id === resolvedVirtualModuleId) {
        markdownSources = detectMarkdowns(docRoot);
        const providerContent = readFileSync(
          path.join(__dirname, './node/provider/virtual.ts'),
        );

        const searchData = generateSearchData(markdownSources);

        const content = `
          ${providerContent.toString()};
          export const rdProvider = initRdProvider({
            name: ${JSON.stringify(config.name)},
            sources: ${JSON.stringify(markdownSources)},
            runtimeImports: ${getRuntimeImports(markdownSources)},
            searchData: ${JSON.stringify(searchData)},
          });
        `;

        return transformSync(content, { loader: 'tsx' });
      }

      return undefined;
    },

    // config: (config, { command }) => {
    //   console.log('这里是config钩子', { config, command });
    // },

    configResolved(resolvedConfig) {
      // console.log('这里是configResolved钩子', { resolvedConfig });
      if (!docRoot) {
        docRoot = resolvedConfig.root;
      }
      if (!root) {
        root = resolvedConfig.root;
      }
      alias = resolvedConfig.resolve.alias;
    },
    async transform(value, path) {
      if (!resolve) {
        resolve = (source, importer, options) => {
          const mergedOptions: typeof options = Object.assign(
            {
              skipSelf: true,
            },
            options,
          );

          const currentAlias = find(alias, { find: source });

          if (currentAlias?.replacement) {
            const realSource = source.replace(source, currentAlias.replacement);
            return this.resolve(realSource, importer, mergedOptions).then(
              (result) => {
                if (result) {
                  return { ...result, assertions: {} };
                }
                return result;
              },
            );
          }

          return this.resolve(source, importer, mergedOptions).then(
            (result) => {
              if (result) {
                return { ...result, assertions: {} };
              }
              return result;
            },
          );
        };
      }

      if (!processors) {
        processors = createFormatAwareProcessors({
          SourceMapGenerator,
          ...getMdxOptions({
            resolverRef: { current: resolve },
            root,
          }),
        });
      }

      const { extnames, process } = processors;
      const file = toVFile({ value, path });

      if (
        file.extname &&
        // filter(file.path) &&
        extnames.includes(file.extname)
      ) {
        const compiled = await process(file);
        const code = String(compiled.value);
        const result = { code, map: compiled.map };
        return result;
      }

      return;
      // // @ts-ignore mdxPlugin has transform function
      // const code = await mdxPlugin.transform?.(value, path);
      //
      // if (path.includes('tooltip') && code) {
      //   return {
      //     ...code,
      //     // code: "import('/../docs/help.md')" + code.code,
      //   };
      // }
      // return code;
    },

    // handleHotUpdate(ctx) {
    //   const { server } = ctx;
    //   console.log('debug handleHotUpdate', server);
    //   server.ws.send({
    //     type: 'full-reload',
    //     path: '*',
    //   });
    // },

    // configureServer(server) {
    //   console.log('这里是configureServer钩子', { server });
    // },

    transformIndexHtml(html) {
      if (!config.name) {
        return html;
      }

      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>${config.name}</title>`,
      );
    },

    async generateBundle() {
      if (isEmpty(markdownSources)) {
        return;
      }

      this.emitFile({
        fileName: 'routes-manifest.json',
        type: 'asset',
        source: JSON.stringify(markdownSources, undefined, 2),
      });

      if (config.sitemap?.hostname) {
        const sitemap = await generateSitemap({
          hostname: config.sitemap?.hostname,
          sources: markdownSources,
        });
        if (sitemap) {
          this.emitFile({
            fileName: 'sitemap.xml',
            type: 'asset',
            source: sitemap,
          });
        }
      }
    },
  };

  return plugin;
};
