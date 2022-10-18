import * as path from 'path';
import * as fs from 'fs';

/**
 * generator root index
 *
 * @param {string} source - icons dirs path
 * @returns {string} template
 */
const getRootIndexTemplate = (source: string) => {
  const dirNames = fs.readdirSync(source);
  const exportEntries = dirNames.map(
    (dirName: string) => `export * from './icons/${dirName}';`,
  );
  return exportEntries.join('\n') + '\n';
};

const run = () => {
  const template = getRootIndexTemplate(
    path.resolve(__dirname, '../src/icons'),
  );

  fs.writeFileSync(path.resolve(__dirname, '../src/index.ts'), template);
};

run();
