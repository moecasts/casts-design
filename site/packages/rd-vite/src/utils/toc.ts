import { HtmlElementNode } from '@jsdevtools/rehype-toc';
import { parse } from 'acorn';
import { Program } from 'estree';
import { identity, isEmpty } from 'lodash-es';

export type TocItem = {
  text: string;
  href: string;
  children?: TocItem[];
};

export const getTocData = (node: HtmlElementNode) => {
  const findTocRoot = (node?: HtmlElementNode): HtmlElementNode | undefined => {
    if (!node) {
      return undefined;
    }

    if (node?.properties?.className?.includes('toc-level')) {
      return node;
    }

    if (isEmpty(node?.children)) {
      return undefined;
    }

    return findTocRoot(node.children?.[0] as HtmlElementNode);
  };

  const rootLevel = findTocRoot(node);

  const transformLevel = (level?: HtmlElementNode): TocItem[] | undefined => {
    if (!level?.children) {
      return;
    }

    const nodes = (level.children as HtmlElementNode[]).map(
      (item: HtmlElementNode) => {
        const anchor = item.children?.[0] as HtmlElementNode | undefined;
        if (!anchor) {
          return undefined;
        }

        const child: TocItem = {
          // @ts-ignore value will exist
          title: anchor.children?.[0]?.value,
          href: anchor.properties.href!,
        };

        const childLevel = item.children?.[1] as HtmlElementNode;

        if (childLevel) {
          child.children = transformLevel(childLevel);
        }

        return child;
      },
    );

    const cleanNodes = nodes.filter(identity) as TocItem[];

    return isEmpty(cleanNodes) ? undefined : cleanNodes;
  };

  return transformLevel(rootLevel);
};

export const getTocDataAst = (toc: HtmlElementNode) => {
  const data = getTocData(toc);

  const dataAst = parse(`Object.assign(${JSON.stringify(data)})`, {
    ecmaVersion: 'latest',
  });

  return dataAst;
};

export const customizeTOC = (toc: HtmlElementNode) => {
  const data = getTocData(toc) || [];

  const dataCode = `${JSON.stringify(data)}`;

  const dataAst = parse(dataCode, {
    ecmaVersion: 'latest',
  });

  Object.assign(toc, {
    type: 'mdxJsxFlowElement',
    name: 'Toc',
    attributes: [
      {
        type: 'mdxJsxAttribute',
        name: 'data',
        value: {
          type: 'mdxJsxAttributeValueExpression',
          value: dataCode,
          data: {
            estree: dataAst as unknown as Program,
          },
        },
      },
    ],
  });
  return toc;
};
