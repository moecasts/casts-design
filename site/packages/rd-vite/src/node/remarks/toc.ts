import GithubSlugger from 'github-slugger';
import { Heading, Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

import { TocItem } from '../../types';

const slugger = new GithubSlugger();

export const remarkToc: Plugin<void[], Root, Root> = () => {
  return (ast, file) => {
    slugger.reset();

    const toc: TocItem[] = [];

    visit(ast, 'heading', (node: Heading) => {
      const text = toString(node);

      // if is frontmatter heading, skip
      if (text.includes('title:')) {
        return;
      }

      const slug = slugger.slug(text);
      toc.push({
        text,
        id: slug,
        depth: node.depth,
      });
    });

    if (!file.data) {
      file.data = {};
    }
    file.data.toc = toc;

    return ast;
  };
};
