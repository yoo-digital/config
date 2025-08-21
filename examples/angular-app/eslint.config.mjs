// @ts-check
import yooAngularEslintConfig from '@yoo-digital/eslint-config-angular';

export default [
  ...yooAngularEslintConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
