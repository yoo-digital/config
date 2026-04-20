import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['nextjs'],
  categories: {
    correctness: 'error',
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
});
