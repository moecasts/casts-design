#!/usr/bin/env node

import { Command, CommanderError } from 'commander';

export const run = () => {
  const cli = new Command('cli');
  cli
    .name('cli')
    .exitOverride()
    .command('create', 'create template')
    .command('changesets', 'package changesets');

  try {
    cli.parse(process.argv);
  } catch (err) {
    const error: CommanderError = err as CommanderError;
    // both commander.help and commander.helpDisplayed need to be considered
    if (
      error.code === 'commander.help' ||
      error.code === 'commander.missingArgument' ||
      error.code === 'commander.helpDisplayed'
    ) {
      return;
    }

    console.error(error);
  }
};

run();
