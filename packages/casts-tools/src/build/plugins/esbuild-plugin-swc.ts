import {
  Options as SWCOptions,
  Output,
  transform,
  transformSync,
} from '@swc/core';
import { Plugin, OnLoadArgs, OnLoadResult } from 'esbuild';
import * as path from 'path';
import * as fs from 'fs/promises';
import deepmerge from 'deepmerge';

const judgeTS = (p: string): boolean => p.endsWith('.ts') || p.endsWith('.tsx');

type ExternalOptions = {
  stripStyleImport?: boolean;
};

export function swcPlugin(
  options: SWCOptions = {},
  extraOptions: ExternalOptions = {},
  isAsync = true,
): Plugin {
  return {
    name: 'esbuild:swc',
    setup(builder) {
      builder.onResolve({ filter: /.*\/.*\.([tj]sx?)$/ }, (args) => {
        const fullPath = path.resolve(args.resolveDir, args.path);
        return {
          path: fullPath,
        };
      });

      builder.onLoad(
        { filter: /.*\/.*\.([tj]sx?)$/ },
        async (args: OnLoadArgs): Promise<OnLoadResult> => {
          let code = await fs.readFile(args.path, 'utf-8');
          if (extraOptions.stripStyleImport) {
            code = code.replace(
              /import\s+['"].+?\.(s[ac]ss|css|less)['"];?\n?/g,
              '',
            );
          }
          const isTS = judgeTS(args.path);
          const isJSX = args.path.endsWith('x');

          const initialOptions: SWCOptions = {
            jsc: {
              parser: {
                syntax: isTS ? 'typescript' : 'ecmascript',
                ...(isTS && isJSX ? { tsx: true } : {}),
                ...(!isTS && isJSX ? { jsx: true } : {}),
              },
            },
            filename: args.path,
            sourceFileName: args.path,
          };

          let result: Output;
          if (isAsync) {
            result = await transform(code, deepmerge(initialOptions, options));
          } else {
            result = transformSync(code, deepmerge(initialOptions, options));
          }
          return {
            contents: result.code,
            loader: 'js',
          };
        },
      );
    },
  };
}
