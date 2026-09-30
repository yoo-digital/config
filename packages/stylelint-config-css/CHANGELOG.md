# Change log

## 1.0.1

### Patch Changes

- [#31](https://github.com/yoo-digital/config/pull/31) [`87ecd65`](https://github.com/yoo-digital/config/commit/87ecd65a35c0d6710cae75fecac8de78314c5854) Thanks [@RadLikeWhoa](https://github.com/RadLikeWhoa)! - Bumped internal dependency patch versions (`stylelint-order` to `~8.1.1`) and removed the redundant `prettier` field/dependency, since Prettier config resolution already cascades from the consuming project's own config. No rule behavior changes.

- [#31](https://github.com/yoo-digital/config/pull/31) [`0b6be92`](https://github.com/yoo-digital/config/commit/0b6be92e90a6a9de2a137eeb7d252784cd5c24cb) Thanks [@RadLikeWhoa](https://github.com/RadLikeWhoa)! - Added `// @ts-check` + JSDoc typing to `index.js` and a hand-written `index.d.ts` (typed via stylelint's own `Config` type), wired up via the `types` field, so a `stylelint.config.ts` importing this package resolves correct types. No runtime behavior change.

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
