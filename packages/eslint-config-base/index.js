module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // Configuration is documented here: https://github.com/airbnb/javascript
    // Rules can be found here:
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: './',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs'],
      },
      typescript: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    'import/consistent-type-specifier-style': 'off',

    // note you must disable the base rule as it can report incorrect errors
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // note you must disable the base rule as it can report incorrect errors
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: {
          memberTypes: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-decorated-field',
            'protected-decorated-field',
            'private-decorated-field',
            'public-field',
            'protected-field',
            'private-field',
            'constructor',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-method',
            'protected-method',
            'private-method',
            'private-instance-method',
            'public-abstract-method',
            'protected-abstract-method',
          ],
        },
      },
    ],
    complexity: ['warn', 10],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'stories/**', '**/*.test.*', '**/*.spec.*'],
      },
    ],
    'max-depth': ['warn', 3],
    'max-lines-per-function': [
      'warn',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'no-await-in-loop': 'error',
    'no-useless-rename': 'error',

    // reduce the severity to warn since there are valid use cases
    'no-restricted-syntax': ['warn'],

    // It is disabled because of a known issue causing issues in barrel files
    // See: https://eslint.org/docs/latest/rules/no-restricted-exports#known-limitations
    'no-restricted-exports': ['off'],

    // See Guild Protocol:
    // https://yooapps.jira.com/wiki/spaces/FD/blog/2021/02/08/2647359596/Frontend+Guild+-+03.02.2021
    'no-plusplus': 'off',

    // The following rules are disabled due to prettier
    'import/order': 'off',

    // The following rules are disabled due to the eslint deprecations
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'dot-location': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
    'lines-around-comment': 'off',
    'max-len': 'off',
    'max-statements-per-line': 'off',
    'multiline-ternary': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-confusing-arrow': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-floating-decimal': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-tabs': 'off',
    'no-trailing-spaces': 'off',
    'no-whitespace-before-property': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'quote-props': 'off',
    quotes: 'off',
    'rest-spread-spacing': 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'spaced-comment': 'off',
    'switch-colon-spacing': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/indent': 'off',
  },
  overrides: [
    {
      files: ['.storybook/**', 'stories/**', '**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
      rules: {
        'max-lines-per-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
