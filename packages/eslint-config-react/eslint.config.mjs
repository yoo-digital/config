// @ts-check
import reactPlugin from '@eslint-react/eslint-plugin';
import baseConfig from '@yoo-digital/eslint-config-base';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y-x';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export default defineConfig(baseConfig, {
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    '@eslint-react': reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y-x': jsxA11yPlugin,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    // React recommended rules
    ...reactHooksPlugin.configs.recommended.rules,
    ...jsxA11yPlugin.configs.recommended.rules,

    // React-specific customizations (formerly eslint-plugin-react, replaced by @eslint-react/eslint-plugin)
    '@eslint-react/no-missing-key': 'error',
    '@eslint-react/no-duplicate-key': 'error',
    '@eslint-react/no-implicit-key': 'error',
    '@eslint-react/jsx-no-useless-fragment': 'warn',
    '@eslint-react/no-array-index-key': 'warn',
    '@eslint-react/no-nested-component-definitions': 'error',

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // JSX Accessibility rules (a11y)
    'jsx-a11y-x/alt-text': 'error',
    'jsx-a11y-x/anchor-has-content': 'error',
    'jsx-a11y-x/click-events-have-key-events': 'warn',
    'jsx-a11y-x/no-static-element-interactions': 'warn',
  },
});
