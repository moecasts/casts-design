import path from 'path';
import { parse, ParserOptions } from 'react-docgen-typescript';

const options: ParserOptions = {};

const docs = parse(
  path.join(__dirname, '../packages/casts-grid/src/index.ts'),
  options,
);

console.log('debug', JSON.stringify(docs, null, 2));
