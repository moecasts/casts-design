import GithubSlugger from 'github-slugger';
import { Root } from 'mdast';
import { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import { toString } from 'mdast-util-to-string';
import { Plugin, Transformer } from 'unified';
import { visit } from 'unist-util-visit';

import { TocItem } from '../../types';

const slugger = new GithubSlugger();

export const remarkToc: Plugin<[], Root> = (): Transformer => {
  return (ast, file) => {
    slugger.reset();

    const toc: TocItem[] = [];

    visit(ast, 'heading', (node: MdxJsxFlowElement) => {
      const text = toString(node);

      // if is frontmatter heading, skip
      if (text.includes('title:')) {
        return;
      }

      const slug = slugger.slug(text);
      toc.push({
        text,
        id: slug,
        depth: (node as unknown as { depth: number }).depth,
      });
    });

    file.data.toc = toc;
  };
};
