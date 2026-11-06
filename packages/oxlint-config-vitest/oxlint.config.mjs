// @ts-check
import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['vitest'],
  categories: {
    correctness: 'error',
  },
});
