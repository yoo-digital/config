// @ts-check
import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import angular from 'angular-eslint';
import eslintImport from 'eslint-plugin-import';
import rxjsPlugin from 'eslint-plugin-rxjs';
import rxjsAngularPlugin from 'eslint-plugin-rxjs-angular';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
      // ...fixupConfigRules(compat.extends('plugin:rxjs/recommended')),
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      import: eslintImport,
      rxjs: fixupPluginRules(rxjsPlugin),
      'rxjs-angular': fixupPluginRules(rxjsAngularPlugin),
    },
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: [],
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: [],
          style: 'camelCase',
        },
      ],
      '@angular-eslint/no-attribute-decorator': 'error',
      '@angular-eslint/no-forward-ref': 'error',
      '@angular-eslint/no-pipe-impure': 'error',
      '@angular-eslint/no-queries-metadata-property': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/relative-url-prefix': 'error',
      '@angular-eslint/use-injectable-provided-in': 'error',
      '@angular-eslint/prefer-standalone-component': 'warn',
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allowAfterThis: true,
        },
      ],
      'rxjs/finnish': 'warn',
      'rxjs/no-ignored-observable': 'warn',
      'rxjs/no-exposed-subjects': [
        'warn',
        {
          allowProtected: true,
        },
      ],
      'rxjs-angular/prefer-takeuntil': [
        'error',
        {
          alias: ['takeUntilDestroyed'],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
    },
  },
);
