---
'@yoo-digital/prettier': patch
---

Added `// @ts-check` + JSDoc typing to `index.js` and a hand-written `index.d.ts` (typed via prettier's own `Config` type), wired up via the `types` field, so a `.prettierrc.ts` importing this package resolves correct types. No runtime behavior change.
