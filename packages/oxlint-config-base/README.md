# YOO Oxlint Configuration for TypeScript Projects

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Foxlint-config-base.svg)](https://www.npmjs.com/package/@yoo-digital/oxlint-config-base)

Contains the settings and rules used for TypeScript projects within YOO.
It is publicly available via the npm registry.

## Purpose

The exported `oxlint.config.mjs` file contains an [Oxlint](https://oxc.rs/docs/guide/usage/linter/) config based on the rules recommended by Oxlint.
This configuration is compatible with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).

This set of rules is framework agnostic. It only contains rules for pure TypeScript. This allows it to be extended
for React and Next.js projects.
Extensions for these frameworks can be found in their respective packages:

- [React](https://www.npmjs.com/package/@yoo-digital/oxlint-config-react)
- [Next.js](https://www.npmjs.com/package/@yoo-digital/oxlint-config-nextjs)

## Usage

In order to use the Oxlint configuration file in your project, you will have to install
its dependencies (including peer-dependencies). The following command should work
for both _npm_ and _yarn_. It will detect the proper client.

```text
npx install-peerdeps --dev @yoo-digital/oxlint-config-base
```

After installing the packages, you can create an [Oxlint configuration file](https://oxc.rs/docs/guide/usage/linter/config.html)
named `oxlint.config.mts` in the root of your project and add the following lines:

```typescript
import yooOxlintConfigBase from '@yoo-digital/oxlint-config-base';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [yooOxlintConfigBase],
  // your own rules
});
```

Then run `oxlint` (or `oxlint ./src`) to lint your project.

The configuration enables type-aware linting (`options.typeAware`), which uses `oxlint-tsgolint`.

You can apply your own set of rules on top of that, but do not turn off any of the rules, except it is an obstacle and making your life harder.

## Rules

This configuration is based on the defaults recommended by Oxlint: all rules of the `correctness` category are enabled as errors
for Oxlint's default plugins (`typescript`, `unicorn`, `oxc`) and the `import` plugin.
Type-aware rules of that category are enabled through `oxlint-tsgolint`.

On top of that, the following rules are adjusted:

| Rule                                       | Setting                                                      |
| ------------------------------------------ | ------------------------------------------------------------ |
| `no-unused-vars`                           | error, names prefixed with `_` are ignored                   |
| `no-shadow`                                | error                                                        |
| `max-depth`                                | warn, max. 3                                                 |
| `max-lines-per-function`                   | warn, max. 50 (blank lines and comments excluded)            |
| `no-console`                               | warn                                                         |
| `typescript/consistent-type-imports`       | error, fixed as inline type imports (`import { a, type B }`) |
| `typescript/explicit-function-return-type` | error                                                        |
| `typescript/no-empty-object-type`          | warn                                                         |
| `typescript/no-explicit-any`               | error                                                        |

In tests and stories (`.storybook/**`, `stories/**`, `**/*.stories.*`, `**/*.test.*`, `**/*.spec.*`),
`max-lines-per-function` and `typescript/no-explicit-any` are disabled.

## Development

**Important**: This configuration should only share the base Oxlint configuration for TypeScript projects.
It should not contain any rules that are specific to a framework, such as React or Next.js.

Before creating a pull request or publishing changes, make sure you tested your changes.
Within this mono-repository you will find example applications in the `examples` directory.
Run `pnpm lint` in these directories to test your changes.
