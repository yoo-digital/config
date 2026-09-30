---
'@yoo-digital/eslint-config-react': major
---

Migrated to ESLint 10 and replaced `eslint-plugin-react` / `eslint-plugin-jsx-a11y` with their actively-maintained successors.

- Raised the `eslint` peer requirement to `^10.0.0` (from `^9.0.0`).
- Replaced `eslint-plugin-react` with `@eslint-react/eslint-plugin`. Rule keys move from the `react/*` prefix to `@eslint-react/*`, and the rule set itself is different — this is a type-aware, function-component-first rewrite rather than a drop-in fork. If you have your own overrides referencing `react/*` rule names, they will need to be re-mapped or removed.
- Replaced `eslint-plugin-jsx-a11y` with `eslint-plugin-jsx-a11y-x`, a maintained fork with the same rules under the `jsx-a11y-x/*` prefix (renamed from `jsx-a11y/*`).
- Bumped `eslint-plugin-react-hooks` from `^5.2.0` to `^7.1.0`. We now extend its full `recommended-latest` flat config (17 rules) instead of hand-picking `rules-of-hooks`/`exhaustive-deps`, which adds several new checks (`purity`, `immutability`, `static-components`, `set-state-in-effect`, and others) that may surface new warnings/errors in existing code.
- Removed the unused `@typescript-eslint/parser` dependency (provided transitively via `typescript-eslint`).
- Loosened peer dependency ranges to their actual major-version floor instead of pinning to a specific patch.
