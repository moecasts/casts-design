import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import { swcPlugin } from './plugins/esbuild-plugin-swc';
import * as path from 'path';
import { calculateOutputSizes, printSizes, printSpentTime } from './util';
import glob from 'glob';
import rimraf from 'rimraf';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
// import ora from 'ora';

const cwd = process.cwd();
const args = process.argv.slice(2);

const isBuildEsm = args.includes('--esm');
const isBuildCjs = args.includes('--cjs');

const isWatch = args.includes('--watch')
  ? {
      onRebuild(error) {
        if (error) console.error('[watch] build failed:', error);
        else console.log('[watch] build finished, watching...');
      },
    }
  : false;

const getEsbuildPlugins = ({ replace = false }) => {
  const plugins = [];

  plugins.push(
    sassPlugin({
      type: 'css',
      async transform(source) {
        const { css } = await postcss([
          autoprefixer,
          postcssPresetEnv({ stage: 0 }),
        ]).process(source, { from: undefined });
        return css;
      },
    }),
  );

  plugins.push(
    swcPlugin(
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es5',
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
      { stripStyleImport: replace },
    ),
  );

  return plugins;
};

const buildWrapper = async (buildOptions) => {
  rimraf.sync(buildOptions.outdir);

  console.log('');
  const startTime = process.hrtime.bigint();
  const buildEsm = await esbuild
    .build(buildOptions)
    .catch(() => process.exit(1));

  if (isWatch) {
    console.log(`[watch] ${buildOptions.format} build finished, watching...`);
  } else {
    const calculateSpentTime = (startTime) => {
      const endTime = process.hrtime.bigint();
      return endTime - startTime;
    };
    const outputSizes = calculateOutputSizes(buildEsm.metafile?.outputs);
    printSizes(outputSizes);
    console.log('');
    printSpentTime(calculateSpentTime(startTime) / 1000000n);
  }
};

const shared = {
  sourcemap: true,
  metafile: true,
  minify: true, // 压缩代码
  watch: isWatch,
  incremental: !!isWatch,
};

const esmBuildOptions = {
  ...shared,
  entryPoints: glob.sync(path.resolve(cwd, 'src/**/!(*.test|*.d).*')),
  treeShaking: true,
  outdir: path.join(cwd, 'dist/esm'),
  format: 'esm',
  target: ['es2015'],
  plugins: getEsbuildPlugins({ replace: true }),
};

const cjsBuildOptions = {
  ...shared,
  entryPoints: [path.resolve(cwd, 'src/index.tsx')],
  bundle: true,
  outdir: path.join(cwd, 'dist/cjs'),
  format: 'cjs',
  plugins: getEsbuildPlugins({}),
};

const build = async () => {
  // let spinner = ora('Building esm\n').start();
  if (isBuildEsm) {
    await buildWrapper(esmBuildOptions);
  }

  // spinner.stop();
  // spinner = ora('Building cjs\n').start();

  if (isBuildCjs) {
    await buildWrapper(cjsBuildOptions);
  }
  // spinner.stop();
};

build();
