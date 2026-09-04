# Change log

## 1.0.1-canary.1

### Patch Changes

- Added `// @ts-check` + JSDoc typing to `index.js` and a hand-written `index.d.ts` (typed via stylelint's own `Config` type), wired up via the `types` field, so a `stylelint.config.ts` importing this package resolves correct types. No runtime behavior change.

## 1.0.1-canary.0

### Patch Changes

- Bumped internal dependency patch versions (`stylelint-order` to `~8.1.1`) and removed the redundant `prettier` field/dependency, since Prettier config resolution already cascades from the consuming project's own config. No rule behavior changes.

## 1.0.0

### Major Changes

- 292ccd6: Update CSS ordering

## 1.0.0-canary.0

### Major Changes

- 292ccd6: Update CSS ordering
