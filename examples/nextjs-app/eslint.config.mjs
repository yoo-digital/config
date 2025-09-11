// This export might not be available in older versions of Next.js
import { flatConfig } from '@next/eslint-plugin-next';
import yooEslintConfigReact from '@yoo-digital/eslint-config-react';

const eslintConfig = [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.next/**'],
  },
  /* Next.js specific */
  flatConfig.recommended,
  /* YOO React ESLint config */
  ...yooEslintConfigReact,
  /* Custom rules or overrides can be added here */
];

export default eslintConfig;
