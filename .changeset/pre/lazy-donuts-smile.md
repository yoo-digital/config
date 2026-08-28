---
'@yoo-digital/stylelint-config-css': patch
---

Bumped internal dependency patch versions (`stylelint-order` to `~8.1.1`) and removed the redundant `prettier` field/dependency, since Prettier config resolution already cascades from the consuming project's own config. No rule behavior changes.
