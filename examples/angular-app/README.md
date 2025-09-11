# AngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## ESLint Configuration

```js
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
```
