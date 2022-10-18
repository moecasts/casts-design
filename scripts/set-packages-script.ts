import { Command } from 'commander';
import fg from 'fast-glob';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const run = async () => {
  const program = new Command();
  program.option('-p, --path <path>', 'use glob to match');

  program.parse();
  const opts = program.opts();
  const globPath = path.isAbsolute(opts.path)
    ? opts.path
    : path.join(process.cwd(), opts.path);

  const paths = await fg(globPath, { onlyDirectories: true });

  paths.forEach((dir) => {
    const filePath = path.join(dir, 'package.json');
    const pkg = JSON.parse(
      readFileSync(filePath, {
        encoding: 'utf8',
        flag: 'r',
      }),
    );

    if (!pkg.scripts) {
      pkg.scripts = {};
    }

    pkg.scripts['test'] = 'vitest';
    pkg.scripts['test:coverage'] = 'vitest run --coverage';

    const content = JSON.stringify(pkg, undefined, 2) + '\n';
    writeFileSync(filePath, content);
  });
};

run();
