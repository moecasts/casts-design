import inquirer from 'inquirer';
import chalk from 'chalk';
import path from 'path';
import jetpack from 'fs-jetpack';
import ejs from 'ejs';
import getGitUserName from 'git-user-name';
import getGitUserEmail from 'git-user-email';

const author = `${getGitUserName() || ''} <${getGitUserEmail() || ''}>`;

type Answer = {
  type: string;
  path: string;
  name: string;
  version: string;
  description?: string;
  author?: string;
  license: string;
  repository?: string;
};

const packageType = ['component'];

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'please choose the package type:',
    choices: packageType,
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
    name: 'description',
    message: 'package description:',
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
  },
];

(async () => {
  const answers: Answer = await inquirer.prompt(questions);

  const tplPath = path.join(__dirname, `../templates/${answers.type}`);
  const destPath = path.join(process.cwd(), answers.path);

  const src = jetpack.cwd(tplPath);
  const dest = jetpack.cwd(destPath);

  src.find({ matching: '*' }).forEach((path: string) => {
    const destPath = path;

    const originContent = src.read(path) || '';
    const content: string = ejs.render(originContent, answers);
    dest.write(destPath, content);
  });

  console.log(chalk.green('package created!'));
})();
