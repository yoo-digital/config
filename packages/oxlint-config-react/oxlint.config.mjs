// @ts-check
import baseConfig from '@yoo-digital/oxlint-config-base';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [baseConfig],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/jsx-key': ['error', { checkKeyMustBeforeSpread: true, warnOnDuplicates: true }],
    'react/jsx-no-useless-fragment': 'warn',
    'react/no-array-index-key': 'warn',
    'react/rules-of-hooks': 'error',
  },
});
