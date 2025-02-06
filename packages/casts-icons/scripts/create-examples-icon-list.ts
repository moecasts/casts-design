import { ESLint } from 'eslint';
import fg from 'fast-glob';
import { Dirent, readdirSync, writeFileSync } from 'fs';
import path from 'path';

const eslint = new ESLint({ fix: true });

const run = async () => {
  const iconsPath = path.join(path.resolve(__dirname), '../src/icons');

  const categoryNames = readdirSync(iconsPath, { withFileTypes: true })
    .filter((dirent: Dirent) => dirent.isDirectory())
    .map((dirent: Dirent) => dirent.name);

  const categoryPaths = categoryNames.map((name) => path.join(iconsPath, name));

  categoryNames.push('custom');
  categoryPaths.push(path.join(path.resolve(__dirname), '../src/custom'));

  const list = categoryPaths.reduce((acc, categoryPath) => {
    const categoryName = path.basename(categoryPath);

    const iconNames = fg.sync(`${categoryPath}/!(*index.ts)`).map((item) => {
      const name = path.basename(item).replace(path.extname(item), '');
      // NOTE: icon name starts with number should add prefix as `I`
      return /^\d/.test(name) ? `I${name}` : name;
    });

    const iconGroups = iconNames.reduce(
      (acc, iconName) => {
        const type = iconName.includes('Line') ? 'line' : 'fill';

        return {
          ...acc,
          [type]: [...acc[type], iconName],
        };
      },
      { line: [], fill: [] },
    );

    return {
      ...acc,
      [categoryName.toLowerCase()]: {
        name: categoryName,
        icons: iconGroups,
      },
    };
  }, {});

  const content = `export const list = ${JSON.stringify(list, null, 2)}`;

  const results = await eslint.lintText(content);

  const code = results[0].output;

  const targetPath = path.join(
    path.resolve(__dirname),
    '../examples/icon-list.ts',
  );

  if (!code) {
    console.warn('Warning: nothing to generate');
    return;
  }

  writeFileSync(targetPath, code);
};

run();
