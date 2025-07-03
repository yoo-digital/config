module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    // Configuration is documented here: https://github.com/airbnb/javascript
    // Rules can be found here:
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'airbnb',
    '@yoo-digital/eslint-config-base',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /**
     * Allow different syntaxes for function components:
     * - Arrow functions for normal use case
     * - Generic functions for generic components
     */
    'react/function-component-definition': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],

    'react/jsx-props-no-spreading': 'off',

    /**
     * Unfortunately the eslint-plugin-react does not work well with TypeScript.
     * It does not identify the explicit type given to the FC or map function.
     * Because of this, the rule has to be turned off completely.
     *
     * See: https://github.com/yannickcr/eslint-plugin-react/issues/1461
     *      https://github.com/yannickcr/eslint-plugin-react/issues/2353
     *      https://github.com/yannickcr/eslint-plugin-react/issues/2396
     */
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // Turning off due to Prettier clash
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-closing-tag-location': 'off',
  },
  overrides: [
    /**
     * Unfortunately there is no way of avoiding the rule "max-lines-per-function"
     * for functional components (or any render function).
     * This override is not perfect, as it ignores all other functions declared in
     * the listed directories as well...
     *
     * See: https://github.com/eslint/eslint/issues/12236
     */
    {
      files: ['src/components/**', 'src/hooks/**', 'src/pages/**', 'src/layouts/**'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ],
};
