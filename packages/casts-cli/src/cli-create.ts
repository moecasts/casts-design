import chalk from 'chalk';
import { execSync } from 'child_process';
import { Command } from 'commander';
import * as ejs from 'ejs';
import * as jetpack from 'fs-jetpack';
import inquirer from 'inquirer';
import { camelCase, upperFirst } from 'lodash';
import * as path from 'path';

type Answer = {
  type: string;
  path: string;
  name: string;
  version: string;
  createDoc: boolean;
  componentName?: string;
  description?: string;
  author?: string;
  license: string;
  repository?: string;
};

export enum PackageType {
  Component = 'component',
}

const getGitUserName = () =>
  execSync('git config --get user.name').toString().trim();
const getGitUserEmail = () =>
  execSync('git config --get user.email').toString().trim();
const getRemoteOriginUrl = () =>
  execSync('git remote get-url origin').toString().trim();

const author = `${getGitUserName() || ''} <${getGitUserEmail() || ''}>`;

// eslint-disable-next-line unused-imports/no-unused-vars
const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'please choose the package type:',
    choices: Object.values(PackageType),
  },
  {
    type: 'input',
    name: 'path',
    message: 'package path:',
    default: './packages/casts-default',
    validate: (input: string) => {
      if (jetpack.exists(input)) {
        return chalk.red('directory is exists');
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'name',
    message: 'package name:',
    validate: (input: string) => {
      if (!input) {
        return chalk.red('please input the package name');
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'componentName',
    message: 'component name:',
    suffix: ' (please input name as kebab-case and lower, e.g. component-name)',
    when: (answers: Answer) => answers.type === PackageType.Component,
    validate: (input: string) => {
      if (!input) {
        return chalk.red('please input the component name');
      }

      if (!input.match(/^[a-z]+(-[a-z]+)*$/)) {
        return chalk.red(
          'please input the component name as kebab-case, e.g. component-name',
        );
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'package description:',
  },
  {
    type: 'confirm',
    name: 'createDoc',
    message: 'create document:',
    choices: ['yes', 'no'],
  },
  {
    type: 'input',
    name: 'version',
    message: 'package version:',
    default: '0.0.1',
    validate: (input: string) => {
      if (!input.match(/^\d+(\.\d+){2}$/)) {
        return chalk.red('invalid version, validate format: x.x.x');
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'author',
    message: 'package author:',
    default: author,
  },
  {
    type: 'input',
    name: 'license',
    message: 'package license:',
    default: 'MIT',
  },
  {
    type: 'input',
    name: 'repository',
    message: 'package repository:',
    default: getRemoteOriginUrl() || '',
  },
];

const isDocFile = (filePath: string) => filePath.includes('_doc.');

const replaceDocFileName = (filePath: string, name: string) =>
  filePath.replace('_doc.', `${name}.`);

export const runCreate = async () => {
  const answers: Answer = await inquirer.prompt(questions);

  const tplPath = path.join(__dirname, `../templates/${answers.type}`);
  const destPath = path.join(process.cwd(), answers.path);

  const src = jetpack.cwd(tplPath);
  const dest = jetpack.cwd(destPath);

  src.find({ matching: '*' }).forEach((filePath: string) => {
    const getDestPath = (filepath: string) => {
      if (isDocFile(filepath) && answers.componentName && answers.createDoc) {
        return replaceDocFileName(filepath, answers.componentName);
      }

      const { componentName } = answers;

      const replacement: Record<string, string> = {
        'src/components/component.tsx': `src/components/${componentName}.tsx`,
        'src/components/hooks/use-component.ts': `src/components/hooks/use-${componentName}.ts`,
        'src/components/styles/component.scss': `src/components/styles/${componentName}.scss`,
        'src/components/types/component.ts': `src/components/types/${componentName}.ts`,
      };

      return replacement[filepath] || filepath;
    };

    const destPath = getDestPath(filePath);

    const variables = {
      ...answers,
      componentNameCamelCase: camelCase(answers.componentName),
      componentNamePascalCase: upperFirst(camelCase(answers.componentName)),
    };

    const originContent = src.read(filePath) || '';
    const content: string = ejs.render(originContent, variables);

    dest.write(destPath, content);
  });

  console.log(chalk.green('package created!'));
};

const run = () => {
  const create = new Command('create').action(() => runCreate());
  create.parse();
};

run();
