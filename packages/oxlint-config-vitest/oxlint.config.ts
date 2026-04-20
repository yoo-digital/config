import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['vitest'],
  categories: {
    correctness: 'off',
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    // vitest recommended rules
    'jest/expect-expect': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-unneeded-async-expect-function': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',
    'vitest/no-import-node-test': 'error',
    'vitest/prefer-called-exactly-once-with': 'error',
    'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
  },
});
