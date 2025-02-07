import {
  ApiDeclaration,
  ApiDeclarations,
  ApisDeclarations,
  ResolveFunction,
} from '@casts/rd-vite/types';
import * as acorn from 'acorn';
import type { Program } from 'estree';
import {
  find,
  isEmpty,
  isUndefined,
  map,
  orderBy,
  reduce,
  toPairs,
  uniq,
  zipObject,
} from 'lodash-es';
import type { BlockContent } from 'mdast';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfmTableFromMarkdown } from 'mdast-util-gfm-table';
import { mdxJsxFromMarkdown } from 'mdast-util-mdx-jsx';
import { MdxJsxFlowElement } from 'mdast-util-mdx-jsx/lib';
import { gfmTable } from 'micromark-extension-gfm-table';
import { mdxJsx } from 'micromark-extension-mdx-jsx';
import { Acorn } from 'micromark-extension-mdx-jsx/lib/syntax';
import {
  ComponentDoc,
  ParserOptions,
  PropItem,
  withDefaultConfig,
} from 'react-docgen-typescript';
import { Plugin, Transformer } from 'unified';
import { visit } from 'unist-util-visit';

const apiParserOptions: ParserOptions = {
  shouldExtractValuesFromUnion: true,
  shouldExtractLiteralValuesFromEnum: true,

  propFilter: (prop: PropItem) => {
    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      const hasPropAdditionalDescription = prop.declarations.find(
        (declaration) => {
          return !declaration.fileName.includes('node_modules');
        },
      );

      return Boolean(hasPropAdditionalDescription);
    }

    return true;
  },
};

const apiParser = withDefaultConfig(apiParserOptions);

export const remarkReactApi: Plugin<
  [
    {
      resolve: ResolveFunction;
    },
  ],
  MdxJsxFlowElement
> = ({ resolve }): Transformer => {
  return async (ast) => {
    const reactApiEntries: string[] = [];

    /* --------------------------------- collect api sources start ---------------------------------------- */
    visit(
      ast,
      {
        type: 'mdxJsxFlowElement',
        name: 'API',
      },
      (node: MdxJsxFlowElement) => {
        const src = find(node.attributes, { name: 'src' });

        const { value } = src as any;

        reactApiEntries.push(value);
      },
    );
    /* --------------------------------- collect api sources end ---------------------------------------- */

    /* --------------------------------- api docgen parse start ---------------------------------------- */
    const getReactApiRealPaths = async (entries: string[]) => {
      const uniqueEntries = uniq(entries);

      return zipObject(
        uniqueEntries,
        await Promise.all(
          uniqueEntries.map(async (entry) => {
            const resolved = await resolve(entry);

            return resolved?.id || '';
          }),
        ),
      );
    };

    const reactApiRealPaths = await getReactApiRealPaths(reactApiEntries);

    if (isEmpty(reactApiRealPaths)) {
      return;
    }

    const apiDeclarations = reduce(
      reactApiRealPaths,
      (acc, realPath, entry) => ({
        ...acc,
        [entry]: apiParser.parse(realPath),
      }),
      {} as Record<string, ComponentDoc[]>,
    );
    /* --------------------------------- api docgen parse end ---------------------------------------- */

    visit(
      ast,
      {
        type: 'mdxJsxFlowElement',
        name: 'API',
      },
      (node: MdxJsxFlowElement, index: number, parent: MdxJsxFlowElement) => {
        const src = find(node.attributes, { name: 'src' });

        const { value } = src as any;

        const currentApiDeclarations = apiDeclarations[value];
        const apiData = getApiData(currentApiDeclarations);

        const apiDeclarationsCode = JSON.stringify(apiData);

        const apiDeclarationsAst = acorn.parse(
          `Object.assign({}, ${apiDeclarationsCode})`,
          {
            ecmaVersion: 'latest',
          },
        );

        node.attributes.push({
          type: 'mdxJsxAttribute',
          name: 'apis',
          value: {
            type: 'mdxJsxAttributeValueExpression',
            value: apiDeclarationsCode,
            data: {
              estree: apiDeclarationsAst as unknown as Program,
            },
          },
        });

        const apiDataArray = orderBy(toPairs(apiData), (pair) => {
          return pair[0].startsWith('use') ? 'z' : pair[0];
        });

        const apisMarkdown = map(apiDataArray, ([name, apis]) => {
          return `### ${name}\n${getApiTableMarkdown(apis)}`;
        }).join('\n');

        const apsAst = fromMarkdown(apisMarkdown, {
          extensions: [
            mdxJsx({ acorn: acorn as unknown as Acorn, addResult: true }),
            gfmTable(),
          ],
          mdastExtensions: [mdxJsxFromMarkdown(), gfmTableFromMarkdown()],
        });

        // replace <API> tag with apis
        parent.children.splice(
          index,
          1,
          ...(apsAst.children as BlockContent[]),
        );
      },
    );
  };
};

const getApiData = (declarations: ComponentDoc[]) => {
  const apis = reduce(
    declarations,
    (acc, componentDoc) => {
      const props = map(componentDoc.props, (prop) => ({
        identifier: prop.name,
        description: prop.description,
        default: prop.defaultValue?.value,
        type: prop.type,
        required: prop.required,
      })) as ApiDeclarations;

      return {
        ...acc,
        [componentDoc.displayName]: props,
      };
    },
    {} as ApisDeclarations,
  );

  return apis;
};

const getApiTableMarkdown = (apis: ApiDeclarations) => {
  let code = '';

  const getDeclarationType = (type: ApiDeclaration['type']) => {
    if (type.name === 'enum') {
      // exclude some special enum
      if (
        ['Color', 'boolean'].includes(type.raw) ||
        type.raw.includes('ReactNode')
      ) {
        return escape(`\`${type.raw}\``);
      }

      return escape(
        map(
          type.value,
          (item) => `\`${item.value.replace(/['"]/g, '')}\``,
        ).join(' | '),
      );
    }

    return escape(type.name);
  };

  /* --------------------------------- table head code ---------------------------------------- */
  code += '| Property | Description | Type | Default | Required |\n';
  code += '| --- | --- | --- | --- | --- |\n';

  /* --------------------------------- table content code ---------------------------------------- */
  code += apis
    .map(
      (api) =>
        `| ${api.identifier} | ${(api.description || '-').replace(
          /\n/g,
          '<br />',
        )} | ${getDeclarationType(api.type)} | ${
          isUndefined(api.default) ? '-' : escape(api.default)
        } | ${api.required} |`,
    )
    .join('\n');

  return code;
};

const entityEscapeMap: Record<string, string> = {
  '<': '&lt;',
  '|': '\\|',
};

const codeEntityEscapeMap: Record<string, string> = {
  // prettier-ignore
  // eslint-disable-next-line prettier/prettier, no-useless-escape
  '<': '\<',
  '|': '\\|',
};

const entityEscapeReg = RegExp(
  '[' + Object.keys(entityEscapeMap).join('') + ']',
  'g',
);

const codeEntityEscapeReg = RegExp(
  '`[^`]*`|([' + Object.keys(codeEntityEscapeMap).join('') + '])',
  'g',
);

// escape html tag
function escape(html: string) {
  if (typeof html !== 'string') {
    return '';
  }

  return html.replace(codeEntityEscapeReg, (codeHtml, group?: string) => {
    if (group) {
      return entityEscapeMap[group];
    }

    return codeHtml.replace(entityEscapeReg, function (match) {
      return codeEntityEscapeMap[match];
    });
  });
}
