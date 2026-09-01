// @ts-check
import js from '@eslint/js';
import * as tsParser from '@typescript-eslint/parser';
import { importX } from 'eslint-plugin-import-x';
import { configs as tsEslintConfigs } from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tsEslintConfigs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
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
      '@typescript-eslint/no-empty-object-type': 'warn',

      // TypeScript-aware equivalents of base rules that can report incorrect errors with TypeScript
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-use-before-define': ['error'],

      // Additional TypeScript rules
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
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '.storybook/**',
            'stories/**',
            '**/*.test.*',
            '**/*.spec.*',
            '**/*.config.{js,ts,mjs}',
          ],
        },
      ],
      'import-x/export': 'warn',

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
      'no-console': 'warn',
    },
  },
  {
    files: ['.storybook/**', 'stories/**', '**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
    rules: {
      'max-lines-per-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
