---
'@yoo-digital/eslint-config-base': patch
'@yoo-digital/eslint-config-react': patch
---

Fixed several regressions from the ESLint 10 flat-config migration.

- `eslint-config-base`: fixed a crash (`TypeError: Unexpected array`) caused by including `typescript-eslint`'s `configs.recommended` as a single array entry instead of spreading it.
- `eslint-config-base`: restored `parserOptions.projectService` so type-aware rules work again.
- `eslint-config-react`: fixed the same `Unexpected array` crash, caused by including `eslint-config-base`'s exported config as a single array entry instead of spreading it. This crashed any project consuming `eslint-config-react` (directly or transitively, e.g. through `eslint-config-angular`'s Next.js/React examples).
