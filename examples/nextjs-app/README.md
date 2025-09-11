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
import { FlatCompat } from '@eslint/eslintrc';
import yooEslintConfigReact from '@yoo-digital/eslint-config-react';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: yooEslintConfigReact,
});

const eslintConfig = [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.next/**'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
```
