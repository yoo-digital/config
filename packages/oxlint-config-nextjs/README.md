# YOO Oxlint Configuration for Next.js Projects

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Foxlint-config-nextjs.svg)](https://www.npmjs.com/package/@yoo-digital/oxlint-config-nextjs)

Contains the settings and rules used for Next.js projects based on TypeScript within YOO.
It is publicly available via the npm registry.

## Purpose

The exported `oxlint.config.mjs` file contains an [Oxlint](https://oxc.rs/docs/guide/usage/linter/) config based on the rules recommended by Oxlint.
This configuration extends the [YOO React Oxlint config](https://www.npmjs.com/package/@yoo-digital/oxlint-config-react) and is aligned
with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).

## Usage

In order to use the Oxlint configuration file in your project, you will have to install
its dependencies (including peer-dependencies). The following command should work
for both _npm_ and _yarn_. It will detect the proper client.

```text
npx install-peerdeps --dev @yoo-digital/oxlint-config-nextjs
```

After installing the packages, you can create an [Oxlint configuration file](https://oxc.rs/docs/guide/usage/linter/config.html)
named `oxlint.config.mts` in the root of your project and add the following lines:

```typescript
import yooOxlintConfigNextjs from '@yoo-digital/oxlint-config-nextjs';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [yooOxlintConfigNextjs],
  // your own rules
});
```

Then run `oxlint` (or `oxlint ./src`) to lint your project.

The configuration enables type-aware linting (`options.typeAware`), which uses `oxlint-tsgolint`.

You can apply your own set of rules on top of that, but do not turn off any of the rules, except it is an obstacle and making your life harder.

## Rules

This configuration extends the React configuration with Oxlint's native `nextjs` plugin,
using its rules of the `correctness` category.

## Development

**Important**: This configuration should only contain rules concerning Next.js.

Before creating a pull request or publishing changes, make sure you tested your changes.
Within this mono-repository you will find a Next.js application in the `examples/nextjs-app` directory.
Run `pnpm lint` in that directory to test your changes.
