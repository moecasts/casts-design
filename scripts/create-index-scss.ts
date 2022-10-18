import { Command } from 'commander';
import fg from 'fast-glob';
import { writeFileSync } from 'fs';
import path from 'path';
import { lint } from 'stylelint';

const run = async () => {
  const program = new Command();
  program.option('-p, --path <path>', 'use glob to match');

  program.parse();
  const opts = program.opts();
  const globPath = path.isAbsolute(opts.path)
    ? opts.path
    : path.join(process.cwd(), opts.path);

  const paths = await fg(globPath, { onlyDirectories: true });

  paths.forEach(async (currentPath) => {
    const scssPaths = await fg(`${currentPath}/src/components/**/*.scss`);

    const indexScssPath = path.join(currentPath, 'src/styles.scss');

    if (scssPaths.length === 0) {
      return;
    }

    const content = scssPaths
      .map((scssPath) => {
        const importPath = `${path.relative(
          path.dirname(indexScssPath),
          scssPath,
        )}`;
        const relativeImportPath = importPath.startsWith('.')
          ? importPath
          : `./${importPath}`;
        return `@import '${relativeImportPath}';`;
      })
      .join('\n');

    const { output: code } = await lint({
      code: content,
      fix: true,
    });
    writeFileSync(indexScssPath, code);
  });
};

run();
