# @yoo-digital/prettier

## 1.3.1

### Patch Changes

- [#31](https://github.com/yoo-digital/config/pull/31) [`0b6be92`](https://github.com/yoo-digital/config/commit/0b6be92e90a6a9de2a137eeb7d252784cd5c24cb) Thanks [@RadLikeWhoa](https://github.com/RadLikeWhoa)! - Added `// @ts-check` + JSDoc typing to `index.js` and a hand-written `index.d.ts` (typed via prettier's own `Config` type), wired up via the `types` field, so a `.prettierrc.ts` importing this package resolves correct types. No runtime behavior change.

- [#31](https://github.com/yoo-digital/config/pull/31) [`87ecd65`](https://github.com/yoo-digital/config/commit/87ecd65a35c0d6710cae75fecac8de78314c5854) Thanks [@RadLikeWhoa](https://github.com/RadLikeWhoa)! - Bumped `@trivago/prettier-plugin-sort-imports` from `^4.3.0` to `~6.0.2`. Verified against real project files that formatting output for the `importOrder`/`importOrderParserPlugins` options this config uses is unchanged.

## 1.3.1-canary.1

### Patch Changes

- Added `// @ts-check` + JSDoc typing to `index.js` and a hand-written `index.d.ts` (typed via prettier's own `Config` type), wired up via the `types` field, so a `.prettierrc.ts` importing this package resolves correct types. No runtime behavior change.

## 1.3.1-canary.0

### Patch Changes

- Bumped `@trivago/prettier-plugin-sort-imports` from `^4.3.0` to `~6.0.2`. Verified against real project files that formatting output for the `importOrder`/`importOrderParserPlugins` options this config uses is unchanged.

## 1.3.0

### Minor Changes

- 292ccd6: Update CSS ordering

## 1.3.0-canary.0

### Minor Changes

- 292ccd6: Update CSS ordering

## 1.2.2

### Patch Changes

- 29793f1: fix: added missing LICENSE statement for prettier package
