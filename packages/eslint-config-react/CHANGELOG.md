# Change Log

## 4.0.0-canary.3

### Patch Changes

- Added a hand-written `eslint.config.d.mts` declaration file (typed as `Linter.Config[]`) and wired it up via the `types` export condition, so an `eslint.config.ts` importing this package resolves correct types. No runtime behavior change.
- Updated dependencies []:
  - @yoo-digital/eslint-config-base@4.0.0-canary.3

## 4.0.0-canary.2

### Patch Changes

- Updated dependencies []:
  - @yoo-digital/eslint-config-base@4.0.0-canary.2

## 4.0.0-canary.1

### Patch Changes

- Fixed several regressions from the ESLint 10 flat-config migration.

  - `eslint-config-base`: fixed a crash (`TypeError: Unexpected array`) caused by including `typescript-eslint`'s `configs.recommended` as a single array entry instead of spreading it.
  - `eslint-config-base`: restored `parserOptions.projectService` so type-aware rules work again.
  - `eslint-config-react`: fixed the same `Unexpected array` crash, caused by including `eslint-config-base`'s exported config as a single array entry instead of spreading it. This crashed any project consuming `eslint-config-react` (directly or transitively, e.g. through `eslint-config-angular`'s Next.js/React examples).

- Updated dependencies []:
  - @yoo-digital/eslint-config-base@4.0.0-canary.1

## 4.0.0-canary.0

### Major Changes

- Migrated to ESLint 10 and replaced `eslint-plugin-react` / `eslint-plugin-jsx-a11y` with their actively-maintained successors.

  - Raised the `eslint` peer requirement to `^10.0.0` (from `^9.0.0`).
  - Replaced `eslint-plugin-react` with `@eslint-react/eslint-plugin`. Rule keys move from the `react/*` prefix to `@eslint-react/*`, and the rule set itself is different — this is a type-aware, function-component-first rewrite rather than a drop-in fork. If you have your own overrides referencing `react/*` rule names, they will need to be re-mapped or removed.
  - Replaced `eslint-plugin-jsx-a11y` with `eslint-plugin-jsx-a11y-x`, a maintained fork with the same rules under the `jsx-a11y-x/*` prefix (renamed from `jsx-a11y/*`).
  - Bumped `eslint-plugin-react-hooks` from `^5.2.0` to `^7.1.0`. We now extend its full `recommended-latest` flat config (17 rules) instead of hand-picking `rules-of-hooks`/`exhaustive-deps`, which adds several new checks (`purity`, `immutability`, `static-components`, `set-state-in-effect`, and others) that may surface new warnings/errors in existing code.
  - Removed the unused `@typescript-eslint/parser` dependency (provided transitively via `typescript-eslint`).
  - Loosened peer dependency ranges to their actual major-version floor instead of pinning to a specific patch.

### Patch Changes

- Updated dependencies []:
  - @yoo-digital/eslint-config-base@4.0.0-canary.0

## 3.0.3

### Patch Changes

- 9f0289d: Add support for new typescript versions
- Updated dependencies [9f0289d]
  - @yoo-digital/eslint-config-base@3.0.3

## 3.0.2

### Patch Changes

- 67c77f1: Relax peer dependency version constraints from patch-level (~) to minor-level (^)
- Updated dependencies [67c77f1]
  - @yoo-digital/eslint-config-base@3.0.2

## 3.0.1

### Patch Changes

- f1a1c39: Update vulnerable dependencies
- e88a5d4: resolve vulnerable dependencies
- Updated dependencies [f1a1c39]
- Updated dependencies [e88a5d4]
  - @yoo-digital/eslint-config-base@3.0.1

## 3.0.0

### Major Changes

- b8b449f: This version provides all new eslint flat-config that is no longer based on the airbnb-eslint config.
  Instead this configuration extends the eslint/js and ts-eslint recommended rules while the custom rules of the previous configuration are retained.

### Patch Changes

- Updated dependencies [b8b449f]
  - @yoo-digital/eslint-config-base@3.0.0

## [1.3.0](https://github.com/yoo-digital/typescript/compare/@yoo-digital/eslint-config-react@1.2.4-canary.0...@yoo-digital/eslint-config-react@1.3.0) (2024-01-22)

### Features

- update versions #GUILD-339 ([f0f1d83](https://github.com/yoo-digital/typescript/commit/f0f1d83cadda815fb855c6ab3c137b79ba382dc4)), closes [#GUILD-339](https://github.com/yoo-digital/typescript/issues/GUILD-339)

## 1.2.4-canary.0 (2023-11-13)

**Note:** Version bump only for package @yoo-digital/eslint-config-react

## 1.2.3 (2023-11-13)

**Note:** Version bump only for package @yoo-digital/eslint-config-react

## 1.2.3-canary.0 (2023-11-13)

**Note:** Version bump only for package @yoo-digital/eslint-config-react

## 1.2.2 (2023-06-01)

**Note:** Version bump only for package @yoo-digital/eslint-config-react

## 1.2.2-canary.1 (2023-06-01)

**Note:** Version bump only for package @yoo-digital/eslint-config-react

## 1.2.2-canary.0 (2023-06-01)

**Note:** Version bump only for package @yoo-digital/eslint-config-react

## 1.2.1 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-react

## 1.2.1-canary.2 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-react

## 1.2.1-canary.1 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-react

## 1.2.1-canary.0 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-react
