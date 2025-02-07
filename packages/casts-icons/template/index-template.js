/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const indexTemplate = (files) => {
  const exportEntries = files.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `I${basename}` : basename;
    return `export { ${exportName} } from './${basename}'`;
  });
  return exportEntries.join('\n') + '\n';
};

module.exports = indexTemplate;
