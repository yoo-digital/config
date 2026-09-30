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
