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

After installing the packages, you can create a `.eslintrc` file in the root of your project and add the following lines:

```json
{
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": ["@yoo-digital/eslint-config-base", "@yoo-digital/eslint-config-angular"]
    },
    {
      "files": ["*.html"],
      "extends": ["@yoo-digital/eslint-config-angular"]
    }
  ]
}
```

You can apply your own set of rules on top of that, but do not turn off any of the rules, except it is an obstacle and making your life harder. Check the chapter below, for a complete set of rules that can be applied.

## Development

Before creating a pull request or publishing changes, make sure you tested your changes. You can use `yarn link` to link your work in progress into an actual project and test your changes. Make sure you are in the directory of the package (_./packages/eslint-config-angular_) before linking. You might also have to link the package _./packages/eslint-config-base_ if you made changes to the base. See the [official documentation](https://yarnpkg.com/lang/en/docs/cli/link/) of yarn for more information.

If you want to extend or change the set of rules, you can find all rules in the following list. We follow the Airbnb styleguide as a reference and applied our own set of rules regarding TypeScript:

- [YOO ESLint Base Rules](https://www.npmjs.com/package/@yoo-digital/eslint-config-base)
- [TypeScript ESLint Plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
- [Airbnb Rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- [Airbnb JS Styleguide](https://github.com/airbnb/javascript)
