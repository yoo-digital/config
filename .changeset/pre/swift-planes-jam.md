---
'@yoo-digital/eslint-config-base': major
---

Migrated to ESLint 10 and replaced `eslint-plugin-import` with `eslint-plugin-import-x`.

- Raised the `eslint` peer requirement to `^10.0.0` (from `^9.0.0`).
- Replaced `eslint-plugin-import` with `eslint-plugin-import-x`. All `import/*` rule keys (e.g. `import/no-extraneous-dependencies`, `import/export`) are now registered under the `import-x/*` prefix. If you have your own overrides referencing the `import/*` rule names, rename them to `import-x/*`.
- Removed the unused `@typescript-eslint/parser` dependency — it's already provided transitively by `typescript-eslint`, which this config depends on directly.
- Loosened peer dependency ranges to their actual major-version floor (e.g. `eslint-plugin-import-x` from `^4.17.1` to `^4.0.0`) instead of pinning to whatever patch we happened to develop against.
