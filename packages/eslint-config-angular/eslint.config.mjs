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
      '@angular-eslint/consistent-component-styles': 'error',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: [],
          style: 'camelCase',
        },
      ],
      '@angular-eslint/no-async-lifecycle-method': 'warn',
      '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
      '@angular-eslint/no-uncalled-signals': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
      '@angular-eslint/prefer-output-emitter-ref': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/prefer-signals': 'error',
      '@angular-eslint/relative-url-prefix': 'error',
      '@angular-eslint/sort-keys-in-type-decorator': [
        'error',
        {
          Component: [
            'selector',
            'templateUrl',
            'template',
            'styleUrl',
            'styleUrls',
            'styles',
            'standalone',
            'imports',
            'providers',
            'host',
            'hostDirectives',
            'animations',
            'changeDetection',
            'encapsulation',
          ],
          Directive: [
            'selector',
            'standalone',
            'providers',
            'host',
            'hostDirectives',
          ],
          Pipe: [
            'name',
            'pure',
            'standalone',
          ],
        },
      ],
      '@angular-eslint/use-component-view-encapsulation': 'warn',
      '@angular-eslint/use-injectable-provided-in': 'error',
      'class-methods-use-this': 'off',
      'import/prefer-default-export': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allowAfterThis: true,
        },
      ],
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    rules: {
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/no-any': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/prefer-static-string-properties': 'error',
      '@angular-eslint/template/prefer-template-literal': 'error',
    },
  },
  {
    files: ['index.html'],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': 'off',
    },
  },
);
