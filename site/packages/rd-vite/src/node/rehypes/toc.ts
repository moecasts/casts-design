import rehypeTocBase from '@jsdevtools/rehype-toc';
import { Options } from '@jsdevtools/rehype-toc/lib/options';
import type { Processor, Transformer } from 'unified';
import { matter } from 'vfile-matter';

export function rehypeToc(this: Processor, opts?: Options): Transformer {
  const tocTransformer = rehypeTocBase.bind(this)(opts);

  return (ast, file) => {
    matter(file);
    // @ts-ignore hide toc if matter.toc === false
    if (file.data.matter?.toc === false) {
      return ast;
    }
    // @ts-ignore toc transformer expected one argument
    return tocTransformer(ast);
  };
}
