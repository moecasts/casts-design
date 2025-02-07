import { Parent } from 'unist';

export interface MDXNode extends Parent {
  type: string;
}
