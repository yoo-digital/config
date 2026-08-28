---
'@yoo-digital/eslint-config-angular': minor
---

Migrated to ESLint 10 and trimmed rule overrides that duplicated `angular-eslint`'s recommended configs.

- Raised the `eslint` peer requirement to `^10.0.0` (from `^9.0.0`).
- Removed a rule override that pinned `@angular-eslint/prefer-on-push-component-change-detection` to `'warn'`; it now inherits `'error'` from `angular-eslint`'s `tsRecommended` config. Components not using `OnPush` change detection will now fail lint instead of only warning.
- Removed dead rule overrides that had no effect (`class-methods-use-this: 'off'`, `import-x/prefer-default-export: 'off'`, and a duplicate `@angular-eslint/template/prefer-control-flow: 'error'` that already matched the recommended default) — no behavior change from these.
- Removed the unused `@typescript-eslint/parser` dependency (provided transitively via `typescript-eslint`/`angular-eslint`).
- Loosened peer dependency ranges to their actual major-version floor instead of pinning to a specific patch.
