import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['vitest'],
  categories: {
    correctness: 'error',
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    // vitest (correctness)
    'jest/no-disabled-tests': 'warn',
    'vitest/warn-todo': 'warn',

    // vitest (suspicious)
    'jest/no-commented-out-tests': 'warn',

    // vitest (style)
    'vitest/no-import-node-test': 'deny',
    'vitest/prefer-describe-function-title': 'warn',
  },
});
