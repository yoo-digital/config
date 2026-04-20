import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import'],
  categories: {
    correctness: 'error',
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    // eslint (pedantic)
    'eslint/max-lines-per-function': ['warn', { max: 50 }],

    // typescript (pedantic)
    'typescript/no-deprecated': 'warn',
    'typescript/no-mixed-enums': 'warn',
    'typescript/only-throw-error': 'warn',

    // typescript (restriction)
    'typescript/explicit-function-return-type': 'error',
    'typescript/no-explicit-any': 'warn',
    'typescript/no-non-null-assertion': 'error',
    'typescript/use-unknown-in-catch-callback-variable': 'warn',

    // typescript (style)
    'array-type': 'error',
    'typescript/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    'typescript/no-empty-interface': 'warn',
    'typescript/no-inferrable-types': 'warn',
    'typescript/prefer-find': 'error',
    'typescript/prefer-for-of': 'warn',

    // typescript (suspicious)
    'typescript/consistent-return': 'error',
    'typescript/no-unnecessary-type-arguments': 'error',
    'typescript/no-unnecessary-type-assertion ': 'error',
    'typescript/no-unnecessary-type-conversion': 'error',
    'typescript/no-unnecessary-type-parameters ': 'error',
    'typescript/no-unsafe-type-assertion': 'warn',

    // unicorn (pedantic)
    'unicorn/prefer-at': 'error',

    // unicorn (suspicious)
    'unicorn/no-array-reverse': 'warn',
    'unicorn/no-array-sort': 'warn',

    // import (restriction)
    'import/no-cycle': 'error',

    // import (style)
    'import/first': 'error',
    'import/no-named-default': 'error',
  },
});
