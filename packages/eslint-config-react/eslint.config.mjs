// @ts-check
import reactPlugin from '@eslint-react/eslint-plugin';
import baseConfig from '@yoo-digital/eslint-config-base';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y-x';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export default defineConfig(baseConfig, {
  files: ['**/*.{js,jsx,ts,tsx}'],
  extends: [
    reactPlugin.configs['recommended-typescript'],
    reactHooksPlugin.configs.flat['recommended-latest'],
    jsxA11yPlugin.configs.recommended,
  ],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    // Rules not covered by @eslint-react/recommended-typescript
    '@eslint-react/no-duplicate-key': 'error',
    '@eslint-react/no-implicit-key': 'error',
    '@eslint-react/jsx-no-useless-fragment': 'warn',
  },
});
