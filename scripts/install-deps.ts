import { Command } from 'commander';
import path from 'path';
import fg from 'fast-glob';
import { readFileSync } from 'fs';
import { spawnSync } from 'child_process';

const run = async () => {
  const program = new Command();
  program.option('-p, --path <path>', 'use glob to match');

  program.parse();
  const opts = program.opts();
  const globPath = path.isAbsolute(opts.path)
    ? opts.path
    : path.join(process.cwd(), opts.path);

  const paths = await fg(globPath, { onlyDirectories: true });

  const deps = paths.reduce((deps, dir) => {
    const pkg = JSON.parse(
      readFileSync(path.join(dir, 'package.json'), {
        encoding: 'utf8',
        flag: 'r',
      }),
    );

    Object.keys(pkg?.dependencies || {}).forEach((dep) => {
      deps.add(dep);
    });

    return deps;
  }, new Set());

  spawnSync('pnpm', ['add', '-w'].concat(Array.from(deps) as string[]), {
    stdio: 'inherit',
  });
};

run();
