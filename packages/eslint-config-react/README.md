# YOO ESLint Configuration for React Projects

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Feslint-config-react.svg)](https://www.npmjs.com/package/@yoo-digital/eslint-config-react)

Contains the settings and rules used for React projects based on TypeScript within YOO.
It is publicly available via the npm registry.

## Purpose

The exported `index.js` file contains all the ESLint rules that are compatible with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).
See the guidelines for more information.

This set of rules can be applied to React applications written in TypeScript.
The base set of rules, which this package extends from, are framework agnostic can be found [here](https://www.npmjs.com/package/@yoo-digital/eslint-config-base).

For [Angular](https://www.npmjs.com/package/@yoo-digital/eslint-config-angular) projects you can
consult [this](https://www.npmjs.com/package/@yoo-digital/eslint-config-angular) package.

## Usage

In order to use the ESLint configuration file in your project, you will have to install
its dependencies (including peer-dependencies). The following command should work
for both _npm_ and _yarn_. It will detect the proper client.

```text
npx install-peerdeps --dev @yoo-digital/eslint-config-react
```

**Be aware**: The _typescript_ package is one of the peer-dependencies. The versions might collide in your project.
Always try to use the latest versions of _typescript_ in your project.

After installing the packages, you can create a `.eslintrc.js` file in the root of your project
and add the following lines:

```javascript
module.exports = {
  extends: '@yoo-digital/eslint-config-react',
};
```

You can apply your own set of rules on top of that, but do not turn off any of the rules,
except it is an obstacle and making your life harder. Check the chapter below, for a complete set of rules
that can be applied.

## Development

**Important**: This file should only contain rules concerning React and JSX.

Before creating a pull request or publishing changes, make sure you tested your changes.
You can use `yarn link` to link your work in progress into an actual project and test your changes.
Make sure you are in the directory of the package (_./packages/eslint-config-react_) before linking.
You might also have to link the package _./packages/eslint-config-base_ if you made changes to the base.
See the [official documentation](https://yarnpkg.com/lang/en/docs/cli/link/) of yarn for more information.

If you want to extend or change the set of rules, you can find all rules in the following list.
We follow the Airbnb styleguide as a reference and applied our own set of rules regarding TypeScript:

- [YOO ESLint Base Rules](https://www.npmjs.com/package/@yoo-digital/eslint-config-base)
- [TypeScript ESLint Plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
- [Airbnb Rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- [Airbnb JS Styleguide](https://github.com/airbnb/javascript)
