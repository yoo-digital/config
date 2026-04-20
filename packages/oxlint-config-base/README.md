# YOO Oxlint Configuration for TypeScript Projects

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Foxlint-config-base.svg)](https://www.npmjs.com/package/@yoo-digital/oxlint-config-base)

Contains the settings and rules used for TypeScript projects within YOO.
It is publicly available via the npm registry.

## Purpose

The exported `oxlint.config.ts` file contains an Oxlint config that is based on the eslint, typescript, oxc, unicorn, and import plugins.
This configuration is compatible with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).

This set of rules is framework agnostic. It only contains rules for pure TypeScript. This allows it to be extended
for React projects.
Extensions for these frameworks can be found in their respective packages:

- [React](https://www.npmjs.com/package/@yoo-digital/oxlint-config-react)

## Usage

In order to use the Oxlint configuration file in your project, you will have to install
its dependencies (including peer-dependencies). The following command should work
for both _npm_ and _yarn_. It will detect the proper client.

```text
npx install-peerdeps --dev @yoo-digital/oxlint-config-base
```

After installing the packages, you can create an [Oxlint configuration file](https://oxc.rs/docs/guide/usage/linter/config.html#create-a-config-file) in the root of your project
and add the following lines:

```javascript
import baseConfig from '@yoo-digital/oxlint-config-base';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [baseConfig],
});
```

You can apply your own set of rules on top of that, but do not turn off any of the rules, unless it is an obstacle and making your life harder.

## Development

**Important**: This configuration should only share the base Oxlint configuration for TypeScript projects.
It should not contain any rules that are specific to any framework.

Before creating a pull request or publishing changes, make sure you tested your changes.
