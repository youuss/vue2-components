module.exports = {
  extends: [
    'plugin:vue/essential',
    'eslint-config-airbnb-base',
    '@vue/typescript/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    cy: 'readonly',
    __VERSION__: true,
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {},
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
  },
  rules: {
    camelcase: 0,
    'no-new': 1,
    'new-cap': 0,
    'no-underscore-dangle': 0,
    'no-confusing-arrow': 0,
    'func-style': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-useless-template-attributes': 0,
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/prefer-for-of': 0,
    'prefer-default-export': 0,
    'max-len': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    'no-useless-constructor': 'off',
    'no-plusplus': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    treatUndefinedAsUnspecified: 0,
    'no-use-before-define': [
      0,
      {
        functions: false,
        classes: false,
      },
    ],
    'no-shadow': 0,
    'no-unused-expressions': 0,
    '@typescript-eslint/ban-types': 0,
    'no-proto': 0,
    'consistent-return': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/export': 0,
    'no-restricted-globals': 0,
    'import/no-cycle': 0,
    'default-case': 0,
    'import/extensions': 0,
    'no-throw-literal': 0,
    'no-return-assign': 0,
    'no-continue': 0,
    'func-names': 0,
    'prefer-spread': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/semi': ['error'],
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'no-cond-assign': 0,
    'no-restricted-syntax': 0,
    'no-useless-escape': 0,
    'no-nested-ternary': 0,
  },
  overrides: [
    {
      files: [
        '*.vue',
      ],
      rules: {
        indent: 2,
        'vue/html-indent': [
          2,
          2,
        ],
        'vue/return-in-computed-property': 1,
        'vue/order-in-components': 2,
        'vue/component-name-in-template-casing': [
          2,
          'kebab-case',
        ],
        'vue/require-default-prop': 0,
      },
    },
    {
      files: [
        '**/demos/*',
        'script/**/*',
        'script/*',
        '*.js',
        'site/**/*',
        'site/*',
      ],
      rules: {
        'no-var-requires': 0,
        'no-console': 0,
        'no-unused-expressions': 0,
        'no-alert': 0,
      },
    },
    {
      // enable the rule specifically for TypeScript files
      files: [
        '*.ts',
        '*.tsx',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/type-annotation-spacing': 1,
      },
    },
  ],
};
