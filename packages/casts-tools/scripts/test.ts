/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-ignore import jest to run
const jest = require('jest');

const args = process.argv.slice(2);

if (args.indexOf('--coverage') < 0) {
  args.push(
    '--config',
    require.resolve('@casts/cd-standard/dist/jest/jest.config'),
  );
}

jest.run(args);
