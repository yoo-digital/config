// @ts-check
import angular from 'angular-eslint';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
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
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allowAfterThis: true,
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
  {
    files: ['index.html'],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': 'off',
    },
  },
);
