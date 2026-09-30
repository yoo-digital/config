# Change Log

## 22.1.0

### Minor Changes

- [#31](https://github.com/yoo-digital/config/pull/31) [`87ecd65`](https://github.com/yoo-digital/config/commit/87ecd65a35c0d6710cae75fecac8de78314c5854) Thanks [@RadLikeWhoa](https://github.com/RadLikeWhoa)! - Migrated to ESLint 10 and trimmed rule overrides that duplicated `angular-eslint`'s recommended configs.

  - Raised the `eslint` peer requirement to `^10.0.0` (from `^9.0.0`).
  - Removed a rule override that pinned `@angular-eslint/prefer-on-push-component-change-detection` to `'warn'`; it now inherits `'error'` from `angular-eslint`'s `tsRecommended` config. Components not using `OnPush` change detection will now fail lint instead of only warning.
  - Removed dead rule overrides that had no effect (`class-methods-use-this: 'off'`, `import-x/prefer-default-export: 'off'`, and a duplicate `@angular-eslint/template/prefer-control-flow: 'error'` that already matched the recommended default) — no behavior change from these.
  - Removed the unused `@typescript-eslint/parser` dependency (provided transitively via `typescript-eslint`/`angular-eslint`).
  - Loosened peer dependency ranges to their actual major-version floor instead of pinning to a specific patch.

### Patch Changes

- [#31](https://github.com/yoo-digital/config/pull/31) [`c670f18`](https://github.com/yoo-digital/config/commit/c670f18b0b7c55211f27da9582024f082dcb3a5f) Thanks [@RadLikeWhoa](https://github.com/RadLikeWhoa)! - Removed the @angular-eslint/* and eslint-plugin-import-x peer dependencies; only angular-eslint is required now.

- [#31](https://github.com/yoo-digital/config/pull/31) [`0b6be92`](https://github.com/yoo-digital/config/commit/0b6be92e90a6a9de2a137eeb7d252784cd5c24cb) Thanks [@RadLikeWhoa](https://github.com/RadLikeWhoa)! - Added a hand-written `eslint.config.d.mts` declaration file (typed as `Linter.Config[]`) and wired it up via the `types` export condition, so an `eslint.config.ts` importing this package resolves correct types. No runtime behavior change.

## 22.1.0-canary.1

### Patch Changes

- Added a hand-written `eslint.config.d.mts` declaration file (typed as `Linter.Config[]`) and wired it up via the `types` export condition, so an `eslint.config.ts` importing this package resolves correct types. No runtime behavior change.

## 22.1.0-canary.0

### Minor Changes

- Migrated to ESLint 10 and trimmed rule overrides that duplicated `angular-eslint`'s recommended configs.

  - Raised the `eslint` peer requirement to `^10.0.0` (from `^9.0.0`).
  - Removed a rule override that pinned `@angular-eslint/prefer-on-push-component-change-detection` to `'warn'`; it now inherits `'error'` from `angular-eslint`'s `tsRecommended` config. Components not using `OnPush` change detection will now fail lint instead of only warning.
  - Removed dead rule overrides that had no effect (`class-methods-use-this: 'off'`, `import-x/prefer-default-export: 'off'`, and a duplicate `@angular-eslint/template/prefer-control-flow: 'error'` that already matched the recommended default) — no behavior change from these.
  - Removed the unused `@typescript-eslint/parser` dependency (provided transitively via `typescript-eslint`/`angular-eslint`).
  - Loosened peer dependency ranges to their actual major-version floor instead of pinning to a specific patch.

## 22.0.0

### Major Changes

- a1efb77: Add support for Angular 22

## 21.0.2

### Patch Changes

- 67c77f1: Relax peer dependency version constraints from patch-level (~) to minor-level (^)

## 21.0.1

### Patch Changes

- f1a1c39: Update vulnerable dependencies
- e88a5d4: resolve vulnerable dependencies

## 21.0.0

### Major Changes

- 3de46fd: \* Add compatibility with version 21
  - Enable additional linting rules

## 20.0.0

### Major Changes

- b8b449f: This version provides all new eslint flat-config that is no longer based on the airbnb-eslint config.
  Instead these new angular eslint configuration is based on the recommended angular eslint rules while the custom rules of the previous configuration are retained.

## [17.0.0](https://github.com/yoo-digital/typescript/compare/@yoo-digital/eslint-config-angular@17.0.0-canary.1...@yoo-digital/eslint-config-angular@17.0.0) (2024-01-22)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 16.0.3-canary.0 (2023-11-13)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 16.0.2 (2023-11-13)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 16.0.2-canary.0 (2023-11-13)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 16.0.1 (2023-06-01)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 16.0.1-canary.0 (2023-06-01)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 14.0.2-canary.0 (2023-06-01)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 14.0.1 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 14.0.1-canary.2 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 14.0.1-canary.1 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular

## 14.0.1-canary.0 (2023-05-08)

**Note:** Version bump only for package @yoo-digital/eslint-config-angular
