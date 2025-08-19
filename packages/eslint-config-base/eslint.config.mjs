// @ts-check
import eslint from '@eslint/js';
import reactConfig from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [tseslint.configs.recommended],
  },
  {
    rules: {
      // TypeScript-specific rules
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

      // Disable base rules that can report incorrect errors with TypeScript
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',

      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],

      // Additional TypeScript rules
      '@typescript-eslint/no-inferrable-types': 'off',
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

      // Import rules
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['.storybook/**', 'stories/**', '**/*.test.*', '**/*.spec.*'],
        },
      ],

      // Code quality rules
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
    },
  },
  {
    files: ['.storybook/**', 'stories/**', '**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
    rules: {
      'max-files-per-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
