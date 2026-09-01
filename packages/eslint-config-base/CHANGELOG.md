# Change Log

## 4.0.0-canary.1

### Patch Changes

- Fixed several regressions from the ESLint 10 flat-config migration.

  - `eslint-config-base`: fixed a crash (`TypeError: Unexpected array`) caused by including `typescript-eslint`'s `configs.recommended` as a single array entry instead of spreading it.
  - `eslint-config-base`: restored `parserOptions.projectService` so type-aware rules work again.
  - `eslint-config-react`: fixed the same `Unexpected array` crash, caused by including `eslint-config-base`'s exported config as a single array entry instead of spreading it. This crashed any project consuming `eslint-config-react` (directly or transitively, e.g. through `eslint-config-angular`'s Next.js/React examples).

## 4.0.0-canary.0

### Major Changes

- Migrated to ESLint 10 and replaced `eslint-plugin-import` with `eslint-plugin-import-x`.

  - Raised the `eslint` peer requirement to `^10.0.0` (from `^9.0.0`).
  - Replaced `eslint-plugin-import` with `eslint-plugin-import-x`. All `import/*` rule keys (e.g. `import/no-extraneous-dependencies`, `import/export`) are now registered under the `import-x/*` prefix. If you have your own overrides referencing the `import/*` rule names, rename them to `import-x/*`.
  - Removed the unused `@typescript-eslint/parser` dependency — it's already provided transitively by `typescript-eslint`, which this config depends on directly.
  - Loosened peer dependency ranges to their actual major-version floor (e.g. `eslint-plugin-import-x` from `^4.17.1` to `^4.0.0`) instead of pinning to whatever patch we happened to develop against.

## 3.0.3

### Patch Changes

- 9f0289d: Add support for new typescript versions

## 3.0.2

### Patch Changes

- 67c77f1: Relax peer dependency version constraints from patch-level (~) to minor-level (^)

## 3.0.1

### Patch Changes

- f1a1c39: Update vulnerable dependencies
- e88a5d4: resolve vulnerable dependencies

## 3.0.0

### Major Changes

- b8b449f: This version provides all new eslint flat-config that is no longer based on the airbnb-eslint config.
  Instead this configuration extends the eslint/js and ts-eslint recommended rules while the custom rules of the previous configuration are retained.

## [1.3.0](https://github.com/yoo-digital/typescript/compare/@yoo-digital/eslint-config-base@1.2.4-canary.0...@yoo-digital/eslint-config-base@1.3.0) (2024-01-22)

### Features

- update versions #GUILD-339 ([f0f1d83](https://github.com/yoo-digital/typescript/commit/f0f1d83cadda815fb855c6ab3c137b79ba382dc4)), closes [#GUILD-339](https://github.com/yoo-digital/typescript/issues/GUILD-339)

## 1.2.4-canary.0 (2023-11-13)

**Note:** Version bump only for package @yoo-digital/eslint-config-base

## 1.2.3 (2023-11-13)

**Note:** Version bump only for package @yoo-digital/eslint-config-base

## 1.2.3-canary.0 (2023-11-13)

**Note:** Version bump only for package @yoo-digital/eslint-config-base

## 1.2.2 (2023-06-01)

**Note:** Version bump only for package @yoo-digital/eslint-config-base

## 1.2.2-canary.1 (2023-06-01)

**Note:** Version bump only for package @yoo-digital/eslint-config-base

## 1.2.2-canary.0 (2023-06-01)

**Note:** Version bump only for package @yoo-digital/eslint-config-base

## 1.2.1 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-base

## 1.2.1-canary.2 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-base

## 1.2.1-canary.1 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-base

## 1.2.1-canary.0 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-base
