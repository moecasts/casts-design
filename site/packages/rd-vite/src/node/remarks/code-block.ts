import { Node, parseSync, traverse } from '@babel/core';
import { isIdentifier, isStringLiteral } from '@babel/types';
import { parse } from 'acorn';
import { Loader, transformSync } from 'esbuild';
import { Program } from 'estree';
import { existsSync, readFileSync } from 'fs';
import { resolve as polyfillResolve } from 'import-meta-resolve';
import { find, isEmpty, isString, map, zipObject } from 'lodash-es';
import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import path, { extname, relative } from 'path';
import type { Plugin, Transformer } from 'unified';
import { visit } from 'unist-util-visit';
import { pathToFileURL } from 'url';

import { ResolverRef } from '../../types';
import { ensureSlashStartPath } from '../../utils';
import { ensureRelativePath } from '../../utils/path';

export const jsExtRegex = /\.(tsx?|jsx?)$/;

/** check is js file */
export const isJsFile = (path: string) => /(.m?tsx?|.m?jsx?)$/.test(path);

export const isNodeModulePackage = (path?: string) =>
  path && (path.includes('node_modules') || path.includes('dist'));

/** parse code to ast using @babel/parser */
export const parseFileSync = (
  path: string,
): ReturnType<typeof parseSync> | void => {
  const code = readFileSync(path).toString();
  const ext = jsExtRegex.exec(path)?.[1] || 'tsx';

  try {
    const transformResult = transformSync(code, {
      loader: ext as Loader,
    });
    return parseSync(transformResult.code);
  } catch (err) {
    console.log('failed to parseSync:', path);
  }
};

export const collectImportSourcesFromAst = (ast: Node) => {
  const sourcesSet = new Set<string>();

  if (ast) {
    traverse(ast, {
      ImportDeclaration: (path) => {
        sourcesSet.add(path.node.source.value);
      },
      CallExpression: (path) => {
        if (
          // @ts-ignore ignore
          isIdentifier(path.node.callee) &&
          path.node.callee.name === 'require' &&
          // @ts-ignore ignore
          isStringLiteral(path.node.arguments[0])
        ) {
          sourcesSet.add(path.node.arguments[0].value);
        }
      },
    });
  }

  return Array.from(sourcesSet);
};

export const ensureJsExt = (source: string) => {
  const jsExts = [
    '.tsx',
    '.ts',
    '.jsx',
    '.js',
    '.mts',
    '.mtsx',
    '.mjs',
    '.mjsx',
  ];
  const currentExt = extname(source).replace('.tsx', '');

  if (currentExt) {
    return source;
  }

  for (const ext of jsExts) {
    const fullSource = `${source}${ext}`;
    if (existsSync(fullSource)) {
      return fullSource;
    }
  }

  return source;
};

export const remarkCodeBlock: Plugin<
  [
    {
      resolverRef?: ResolverRef;
      root?: string;
    },
  ],
  MdxJsxFlowElement
> = (options): Transformer<MdxJsxFlowElement, MdxJsxFlowElement> => {
  const { resolverRef, root } = options;

  const resolve =
    resolverRef?.current ??
    (async (source, importer) => {
      const href = pathToFileURL(importer!).href;
      return {
        id: polyfillResolve(source, href),
      };
    });

  const getSlashStartPath = (p: string) => {
    if (!root) {
      return p;
    }

    return ensureSlashStartPath(relative(root, p));
  };

  return async (ast, file) => {
    const codeAbsSources: string[] = [];

    /* --------------------------------- collect code sources start ---------------------------------------- */
    visit(
      ast,
      {
        type: 'mdxJsxFlowElement',
        name: 'Code',
      },
      (node: MdxJsxFlowElement) => {
        const codeSrc: string = node.attributes?.[0].value as string;

        const codeAbsSrc = ensureJsExt(path.join(file.dirname!, codeSrc));

        codeAbsSources.push(codeAbsSrc);
      },
    );
    /* --------------------------------- collect code sources start ---------------------------------------- */

    /* --------------------------------- load code sources content start ---------------------------------------- */
    const analyzeImports = async (indexPath: string) => {
      const deps = new Set<string>();

      const traverseFileImports = async (currentPath: string) => {
        const fileImportSources: Record<string, string> = {};

        if (!isJsFile(currentPath)) {
          return fileImportSources;
        }

        const ast = parseFileSync(currentPath);

        const importSources = collectImportSourcesFromAst(ast as Node);

        const resolveSource = async (source: string) => {
          try {
            const resolvedId = (await resolve(source, currentPath))?.id;
            if (!resolvedId) {
              return;
            }

            if (isNodeModulePackage(resolvedId) || !source.startsWith('.')) {
              deps.add(source);
              return;
            }

            const id = ensureRelativePath(
              path.relative(currentPath, path.join(currentPath, source)),
            );

            fileImportSources[id] = resolvedId;
          } catch (error) {
            console.log(`cannot resolve ${source} from ${currentPath}`, error);
          }
        };

        await Promise.all(importSources.map(resolveSource));

        await Promise.all(
          Object.values(fileImportSources).map(async (importSource) => {
            Object.assign(
              fileImportSources,
              await traverseFileImports(importSource),
            );
            return;
          }),
        );

        return fileImportSources;
      };

      return await traverseFileImports(indexPath);
    };

    const importSources = zipObject(
      codeAbsSources,
      await Promise.all(
        codeAbsSources.map(async (src) => {
          return await analyzeImports(src);
        }),
      ),
    );
    /* --------------------------------- load code sources content end ---------------------------------------- */

    /* --------------------------------- pass code sources content to component start ---------------------------------------- */
    visit(
      ast,
      {
        type: 'mdxJsxFlowElement',
        name: 'Code',
      },
      (node: MdxJsxFlowElement) => {
        const codeSrc = node.attributes?.[0].value;
        if (!isString(codeSrc)) {
          return;
        }

        const codeAbsSrc = ensureJsExt(path.join(file.dirname!, codeSrc));
        const currentFileImportSources = importSources[codeAbsSrc];

        const wholeImportSources = {
          index: codeAbsSrc,
          ...currentFileImportSources,
        };

        const importSourcesCode = `Object.assign({
            ${map(wholeImportSources, (source, id) => {
              return `'${id}': () => import('${getSlashStartPath(
                source,
              )}?raw')`;
            }).join(',')}
          })`;

        const code = importSourcesCode;
        const codeAst = parse(code, { ecmaVersion: 'latest' });

        node.attributes.push({
          type: 'mdxJsxAttribute',
          name: 'codeSources',
          value: {
            type: 'mdxJsxAttributeValueExpression',
            value: code,
            data: {
              estree: codeAst as unknown as Program,
            },
          },
        });

        const childrenImportCode = `() => import('${getSlashStartPath(
          codeAbsSrc,
        )}')`;
        const childrenCodeAst = parse(childrenImportCode, {
          ecmaVersion: 'latest',
        });

        node.attributes.push({
          type: 'mdxJsxAttribute',
          name: 'children',
          value: {
            type: 'mdxJsxAttributeValueExpression',
            value: childrenImportCode,
            data: {
              estree: childrenCodeAst as unknown as Program,
            },
          },
        });
      },
    );
    /* --------------------------------- pass code sources content to component end ---------------------------------------- */

    return ast;
  };
};

export const remarkCodeBlockStandalone: Plugin<
  [],
  MdxJsxFlowElement
> = (): Transformer<MdxJsxFlowElement, MdxJsxFlowElement> => {
  return (ast, file) => {
    const standaloneCodeBlocks: Record<string, string> = {};

    /* --------------------------------- collect standalone code block sources start ---------------------------------------- */
    visit(
      ast,
      {
        type: 'mdxJsxFlowElement',
        name: 'Code',
      },
      (node: MdxJsxFlowElement) => {
        // NOTE: create standalone route anyway
        const isStandalone = true;
        // find(
        //   node.attributes,
        //   (attribute: MdxJsxAttribute) => attribute.name === 'iframe',
        // );

        if (!isStandalone) {
          return;
        }

        const source = find(node.attributes, { name: 'src' })?.value as string;
        if (!source) {
          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const codeBlockSrc = ensureJsExt(path.join(file.dirname!, source));
        standaloneCodeBlocks[source as string] = codeBlockSrc;
      },
    );
    /* --------------------------------- collect standalone code block sources end ---------------------------------------- */

    if (!isEmpty(standaloneCodeBlocks)) {
      file.data.standaloneCodeBlocks = standaloneCodeBlocks;
    }

    return ast;
  };
};
