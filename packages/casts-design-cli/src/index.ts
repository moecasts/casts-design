const inquirer = require('inquirer');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');
const { existsSync } = require('fs-extra');
const path = require('path');
const jetpack = require('fs-jetpack');
import ejs = require('ejs');

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
      if (existsSync(input)) {
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
    default: '1.0.0',
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
  },
  {
    type: 'input',
    name: 'license',
    message: 'package license:',
    default: 'MIT',
  },
];

(async () => {
  const answers = await inquirer.prompt(questions);

  const tplPath = path.join(__dirname, `../templates/${answers.type}`);
  const destPath = path.join(process.cwd(), answers.path);

  const src = jetpack.cwd(tplPath);
  const dest = jetpack.cwd(destPath);

  src.find({ matching: '*' }).forEach((path: string) => {
    const originContent = src.read(path);
    const content: string = ejs.render(originContent, answers);

    dest.write(path, content);
  });

  console.log(chalk.green('package created!'));
})();
