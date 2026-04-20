import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['react', 'react-perf', 'jsx-a11y'],
  categories: {
    correctness: 'error',
    perf: 'error',
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    // jsx-a11y (correctness)
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',

    // react (correctness)
    'react/exhaustive-deps': 'warn',

    // react (pedantic)
    'react/jsx-no-useless-fragment': 'warn',
    'react/rules-of-hooks': 'error',

    // react (perf)
    'react/no-array-index-key': 'warn',

    // react (restriction)
    'react/button-has-type': 'error',

    // react (style)
    'react/hook-use-state': 'warn',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-pascal-case': 'error',
    'react/self-closing-comp': 'error',
  },
});
