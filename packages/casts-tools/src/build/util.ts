import * as chalk from 'chalk';

export const humanFileSize = (size: number) => {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) + ['B', 'KB', 'MB', 'GB', 'TB'][i]
  );
};

export const calculateOutputSizes = (outputs: any) => {
  return Object.keys(outputs).reduce((acc: string[], outputPath) => {
    // skip calculate sourcemap
    if (outputPath.indexOf('.map') > -1) {
      return acc;
    }
    return [
      ...acc,
      `   ${chalk.bold(outputPath)}\t\t${chalk.cyan.bold(
        humanFileSize(outputs[outputPath].bytes),
      )}`,
    ];
  }, []);
};

export const printSizes = (sizes: string[]) => sizes.map((size) => console.log(size));

export const printSpentTime = (time: number | bigint) =>
  console.log('⚡ ' + chalk.green(`Done in ${time}ms`));
