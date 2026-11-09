# YOO Oxlint Configuration for Vitest

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Foxlint-config-vitest.svg)](https://www.npmjs.com/package/@yoo-digital/oxlint-config-vitest)

Contains the settings and rules used for test suites written with [Vitest](https://vitest.dev/) within YOO.
It is publicly available via the npm registry.

## Purpose

The exported `oxlint.config.mjs` file contains an [Oxlint](https://oxc.rs/docs/guide/usage/linter/) config based on the rules recommended by Oxlint.
It is meant to be combined with one of the other YOO Oxlint configurations, e.g.
[base](https://www.npmjs.com/package/@yoo-digital/oxlint-config-base) or
[React](https://www.npmjs.com/package/@yoo-digital/oxlint-config-react).

## Usage

Install the package together with its peer-dependencies:

```text
npx install-peerdeps --dev @yoo-digital/oxlint-config-vitest
```

Then add it to the `extends` of your `oxlint.config.mts`, next to your project configuration:

```typescript
import yooOxlintConfigReact from '@yoo-digital/oxlint-config-react';
import yooOxlintConfigVitest from '@yoo-digital/oxlint-config-vitest';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [yooOxlintConfigReact, yooOxlintConfigVitest],
  // your own rules
});
```

## Rules

This configuration enables Oxlint's native `vitest` plugin, using its rules of the `correctness` category as errors.

## Development

**Important**: This configuration should only contain rules concerning Vitest.

Before creating a pull request or publishing changes, make sure you tested your changes.
