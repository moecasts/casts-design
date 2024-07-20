module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // or 'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 第一部分：Node.js 和第三方库
          [
            '^\\u0000', // 核心 Node.js 模块
            '^react$', // React 库
            '^react-dom$',
            '^react-router$',
            '^@?\\w', // 其他第三方库
          ],
          // 第四部分：绝对路径
          ['^/'],
          // 第三部分：相对路径
          ['^\\.'],
          // 第二部分：样式文件
          ['\\.s?css$', '\\.less$', '\\.styl$', '\\.stylus$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    curly: ['error', 'all'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
      },
    ],
    'eol-last': ['error', 'always'],
    'prefer-const': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
