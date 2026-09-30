# Next.js App Example

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## ESLint Configuration

```js
// @ts-check
import nextPlugin from '@next/eslint-plugin-next';
import yooEslintConfigReact from '@yoo-digital/eslint-config-react';

const { configs } = nextPlugin;

const eslintConfig = [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.next/**'],
  },
  configs.recommended,
  ...yooEslintConfigReact,
];

export default eslintConfig;
```
