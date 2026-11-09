# YOO Oxfmt Configuration

_This package contains a reusable [oxfmt](https://oxc.rs/docs/guide/usage/formatter) configuration for projects @ YOO._

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Foxfmt-config.svg)](https://www.npmjs.com/package/@yoo-digital/oxfmt-config)

## Introduction

The configuration builds on oxfmt's defaults and adds the following settings:

- Single quotes in JavaScript and TypeScript, double quotes in CSS, SCSS and HTML
- One attribute per line in HTML and JSX
- Sorted imports, without blank lines between import groups
- `package.json` files are not sorted
- HTML files use a print width of 120
- Angular component templates are formatted with the Angular parser (see [Angular templates](#angular-templates))

## Using the Configuration

Install the configuration together with oxfmt:

```text
pnpm add -D @yoo-digital/oxfmt-config oxfmt
```

Create an `oxfmt.config.mts` file in the root of your project:

```ts
export { default } from '@yoo-digital/oxfmt-config';
```

Then run `oxfmt` to format your project, or `oxfmt --check` to verify the formatting (e.g. in CI).

## Extending the Configuration

oxfmt has no `extends` option. Spread the configuration and add your project-specific options:

```ts
import yooOxfmtConfig from '@yoo-digital/oxfmt-config';
import { defineConfig } from 'oxfmt';

export default defineConfig({
  ...yooOxfmtConfig,
  // overrides
});
```

For a complete overview of configuration options please refer to the [official documentation](https://oxc.rs/docs/guide/usage/formatter/config).

## Ignoring files

oxfmt respects `.gitignore` files. Use the `ignorePatterns` option to ignore additional files.

## Angular templates

Angular component templates are formatted with the Angular parser, which supports control flow blocks
(`@if`, `@for`, …), bindings and pipes. Templates are detected by these patterns:

- `**/*.component.html`
- `**/src/app/**/*.html` (Angular 20+ naming without the `.component` suffix, e.g. `app.html`)

All other `*.html` files, such as `src/index.html`, are formatted as plain HTML. If your templates live elsewhere,
add your own entry to `associations` with `language: 'angular-html'`.
