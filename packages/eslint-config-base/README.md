# YOO ESLint Configuration for TypeScript Projects

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Feslint-config-base.svg)](https://www.npmjs.com/package/@yoo-digital/eslint-config-base)

Contains the settings and rules used for TypeScript projects within YOO.
It is publicly available via the npm registry.

## Purpose

The exported `eslint.config.mjs` file contains a eslint config (flat-config) that is based on the recommended eslint rules for development with TypeScript.
This configuration is compatible with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).

This set of rules is framework agnostic. It only contains rules for pure TypeScript. This allows it to be extended
for Angular or React projects.
Extensions for these frameworks can be found in their respective packages:

- [React](https://www.npmjs.com/package/@yoo-digital/eslint-config-react)
- [Angular](https://www.npmjs.com/package/@yoo-digital/eslint-config-angular)

## Usage

In order to use the ESLint configuration file in your project, you will have to install
its dependencies (including peer-dependencies). The following command should work
for both _npm_ and _yarn_. It will detect the proper client.

```text
npx install-peerdeps --dev @yoo-digital/eslint-config-base
```

**Be aware**: The _typescript_ package is one of the peer-dependencies. The versions might collide in your project.
Always try to use the latest versions of _typescript_ in your project.

After installing the packages, you can create a [ESLint configuration file](https://eslint.org/docs/latest/use/migrate-to-9.0.0#flat-config) in the root of your project
and add the following lines:

```javascript
import yooEslintConfigBase from '@yoo-digital/eslint-config-base';

export default [
  ...yooEslintConfigBase,
  // your own rules
];
```

You can apply your own set of rules on top of that, but do not turn off any of the rules, except it is an obstacle and making your life harder.
Check the chapter below, for a complete set of rules that can be applied.

## Development

Before creating a pull request or publishing changes, make sure you tested your changes.
You can use `yarn link` to link your work in progress into an actual project and test your changes.
Make sure you are in the directory of the package (_./packages/eslint-config-base_) before linking.
See the [official documentation](https://yarnpkg.com/lang/en/docs/cli/link/) of yarn for more information.

If you want to extend or change the set of rules, you can find all rules in the following list.

- [TypeScript ESLint Plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
