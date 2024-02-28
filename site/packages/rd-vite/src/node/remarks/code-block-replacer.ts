import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

export const remarkCodeBlockReplacer: Plugin<[], MdxJsxFlowElement> =
  () => (ast) => {
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
