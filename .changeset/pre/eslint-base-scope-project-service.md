---
'@yoo-digital/eslint-config-base': patch
---

Fixed the TS-aware rule block matching JS/JSX files as well as TS files. `parserOptions.projectService` and all `@typescript-eslint/*` rules are now scoped to `**/*.{ts,tsx,mts,cts}` only, matching how `typescript-eslint`'s own `recommended` config scopes itself.

- Plain `.js`/`.mjs`/`.cjs`/`.jsx` files outside a tsconfig no longer fail to lint with "not found by the project service".
- TS-only rules (e.g. `explicit-function-return-type`) no longer fire on JS/JSX files.
- JS/JSX files now get the core `no-unused-vars` rule (with the same options) instead of the TS-aware variant, which requires type information.
