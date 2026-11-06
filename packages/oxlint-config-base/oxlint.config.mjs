// @ts-check
import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['typescript', 'unicorn', 'oxc', 'import'],
  categories: {
    correctness: 'error',
  },
  options: {
    typeAware: true,
  },
  rules: {
    // Code quality rules
    'max-depth': ['warn', 3],
    'max-lines-per-function': ['warn', { max: 50, skipBlankLines: true, skipComments: true }],
    'no-console': 'warn',
    'no-shadow': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    // TypeScript rules
    'typescript/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    'typescript/explicit-function-return-type': 'error',
    'typescript/no-empty-object-type': 'warn',
    'typescript/no-explicit-any': 'error',
  },
  overrides: [
    {
      files: ['**/.storybook/**', '**/stories/**', '**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
      rules: {
        'max-lines-per-function': 'off',
        'typescript/no-explicit-any': 'off',
      },
    },
  ],
});
