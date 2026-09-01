// @ts-check
import reactPlugin from '@eslint-react/eslint-plugin';
import baseConfig from '@yoo-digital/eslint-config-base';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y-x';

export default [
  ...baseConfig,
  reactPlugin.configs['recommended-type-checked'],
  jsxA11yPlugin.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Rules not covered by @eslint-react/recommended-typescript
      '@eslint-react/no-duplicate-key': 'error',
      '@eslint-react/no-implicit-key': 'error',
      '@eslint-react/jsx-no-useless-fragment': 'warn',
    },
  },
];
