import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import type { Plugin, Transformer } from 'unified';
import { visit } from 'unist-util-visit';

export const remarkCodeBlockReplacer: Plugin<[], MdxJsxFlowElement> =
  (): Transformer<MdxJsxFlowElement, MdxJsxFlowElement> => (ast) => {
    visit(
      ast,
      {
        type: 'mdxJsxFlowElement',
        name: 'code',
      },
      (node: MdxJsxFlowElement) => {
        node.name = 'Code';
      },
    );

    return ast;
  };
