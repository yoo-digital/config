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
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/img-redundant-alt': 'allow',

    // react (pedantic)
    'react/rules-of-hooks': 'error',

    // react (perf)
    'react/no-array-index-key': 'warn',

    // react (restriction)
    'react/button-has-type': 'error',

    // react (style)
    'react/hook-use-state': 'warn',
    'react/jsx-boolean-value': 'error',
    'react/jsx-pascal-case': 'error',
    'react/self-closing-comp': 'error',
  },
});
