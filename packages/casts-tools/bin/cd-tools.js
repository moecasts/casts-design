#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const path = require('path');
const spawn = require('cross-spawn');

const script = process.argv[2];
const args = process.argv.slice(3);

switch (script) {
  case 'test': {
    const result = spawn.sync(
      'node',
      [require.resolve(path.join('../dist', script))].concat(args),
      { stdio: 'inherit' },
    );
    process.exit(result.status);
    break;
  }
  default:
    console.log(`Unknown script "${script}".`);
    break;
}
