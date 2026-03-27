// This export might not be available in older versions of Next.js
import nextPlugin from '@next/eslint-plugin-next';
import yooEslintConfigReact from '@yoo-digital/eslint-config-react';

const { configs } = nextPlugin;

const eslintConfig = [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.next/**'],
  },
  /* Next.js specific */
  configs.recommended,
  /* YOO React ESLint config */
  ...yooEslintConfigReact,
  /* Custom rules or overrides can be added here */
];

export default eslintConfig;
