---
'@yoo-digital/eslint-config-angular': patch
---

Added a hand-written `eslint.config.d.mts` declaration file (typed as `Linter.Config[]`) and wired it up via the `types` export condition, so an `eslint.config.ts` importing this package resolves correct types. No runtime behavior change.
