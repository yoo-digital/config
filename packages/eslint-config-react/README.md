# YOO ESLint Configuration for React Projects

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Feslint-config-react.svg)](https://www.npmjs.com/package/@yoo-digital/eslint-config-react)

Contains the settings and rules used for React projects based on TypeScript within YOO.
It is publicly available via the npm registry.

## Purpose

The exported `eslint.config.mjs` file contains a eslint config (flat-config) that is based on the recommended eslint rules for development with React and TypeScript.
This configuration extends the [YOO Base ESLint config](https://www.npmjs.com/package/@yoo-digital/eslint-config-base) and is aligned
with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).

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

After installing the packages, you can create a [ESLint configuration file](https://eslint.org/docs/latest/use/migrate-to-9.0.0#flat-config) in the root of your project
and add the following lines:

```javascript
import yooEslintConfigReact from '@yoo-digital/eslint-config-react';

export default [
  ...yooEslintConfigReact,
  // your own rules
];
```

You can apply your own set of rules on top of that, but do not turn off any of the rules, except it is an obstacle and making your life harder.
Check the chapter below, for a complete set of rules that can be applied.

## Development

**Important**: This configuration should only contain rules concerning React.js.

Before creating a pull request or publishing changes, make sure you tested your changes.
Within this mono-repository you will find an example React application in the `examples/react-app` directory and a Next.js application in the `examples/nextjs-app` directory.
Run `npm run lint` in these directories to test your changes.
