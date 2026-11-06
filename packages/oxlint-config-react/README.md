# YOO Oxlint Configuration for React Projects

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Foxlint-config-react.svg)](https://www.npmjs.com/package/@yoo-digital/oxlint-config-react)

Contains the settings and rules used for React projects based on TypeScript within YOO.
It is publicly available via the npm registry.

## Purpose

The exported `oxlint.config.mjs` file contains an [Oxlint](https://oxc.rs/docs/guide/usage/linter/) config based on the rules recommended by Oxlint.
This configuration extends the [YOO Base Oxlint config](https://www.npmjs.com/package/@yoo-digital/oxlint-config-base) and is aligned
with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).

## Usage

In order to use the Oxlint configuration file in your project, you will have to install
its dependencies (including peer-dependencies). The following command should work
for both _npm_ and _yarn_. It will detect the proper client.

```text
npx install-peerdeps --dev @yoo-digital/oxlint-config-react
```

After installing the packages, you can create an [Oxlint configuration file](https://oxc.rs/docs/guide/usage/linter/config.html)
named `oxlint.config.mts` in the root of your project and add the following lines:

```typescript
import yooOxlintConfigReact from '@yoo-digital/oxlint-config-react';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [yooOxlintConfigReact],
  // your own rules
});
```

Then run `oxlint` (or `oxlint ./src`) to lint your project.

The configuration enables type-aware linting (`options.typeAware`), which uses `oxlint-tsgolint`.

You can apply your own set of rules on top of that, but do not turn off any of the rules, except it is an obstacle and making your life harder.

## Rules

This configuration extends the base configuration with Oxlint's native `react` and `jsx-a11y` plugins,
using their rules of the `correctness` category.

On top of that, the following rules are adjusted:

| Rule                            | Setting                                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| `react/rules-of-hooks`          | error                                                                                        |
| `react/jsx-key`                 | error, also checks that `key` is placed before spread props and that keys are not duplicated |
| `react/jsx-no-useless-fragment` | warn                                                                                         |
| `react/no-array-index-key`      | warn                                                                                         |

## Development

**Important**: This configuration should only contain rules concerning React.js.

Before creating a pull request or publishing changes, make sure you tested your changes.
Within this mono-repository you will find an example React application in the `examples/react-app` directory and a Next.js application in the `examples/nextjs-app` directory.
Run `pnpm lint` in these directories to test your changes.
