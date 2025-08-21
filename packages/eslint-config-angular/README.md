# YOO ESLint Configuration for Angular Projects

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Feslint-config-angular.svg)](https://www.npmjs.com/package/@yoo-digital/eslint-config-angular)

Contains the settings and rules used for Angular projects based on TypeScript within YOO. It is publicly available via the npm registry.

## Purpose

The exported `index.js` file contains all the ESLint rules that are compatible with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines). See the guidelines for more information.

This set of rules can be applied to Angular applications written in TypeScript.

The base set of rules are framework agnostic can be found [here](https://www.npmjs.com/package/@yoo-digital/eslint-config-base).

For [React](https://www.npmjs.com/package/@yoo-digital/eslint-config-react) projects you can consult [this](https://www.npmjs.com/package/@yoo-digital/eslint-config-react) package.

## Usage

In order to use the ESLint configuration file in your project, you will have to install its dependencies (including peer-dependencies). The following commands work for both _npm_ and _yarn_. It will detect the proper client.

```text
npx install-peerdeps --dev @yoo-digital/eslint-config-base
npx install-peerdeps --dev @yoo-digital/eslint-config-angular
```

After installing the packages, you can create a `eslint.config.mjs` file in the root of your project and add the following lines:

```js
// @ts-check
import yooAngularEslintConfig from '@yoo-digital/eslint-config-angular';

// Optional
// import yooBaseEslintConfig from '@yoo-digital/eslint-config-base';

export default [
  // Optional
  // ...yooBaseEslintConfig,
  ...yooAngularEslintConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // your own rules
];
```

You can apply your own set of rules on top of that, but do not turn off any of the rules, except it is an obstacle and making your life harder. Check the chapter below, for a complete set of rules that can be applied.

## Development

**Important**: This configuration should only contain the Angular specific ESLint configuration.

Before creating a pull request or publishing changes, make sure you tested your changes.
Within this mono-repository you will find an example Angular application in the `examples/angular-app` directory.
Run `npm run lint` in that directory to test your changes.
