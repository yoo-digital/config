---
'@yoo-digital/stylelint-config-sass': patch
---

Added `// @ts-check` + JSDoc typing to `index.js` and a hand-written `index.d.ts` (typed via stylelint's own `Config` type), wired up via the `types` field, so a `stylelint.config.ts` importing this package resolves correct types. No runtime behavior change.
