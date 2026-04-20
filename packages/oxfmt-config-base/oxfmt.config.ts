import { defineConfig } from 'oxfmt';

export default defineConfig({
  options: {
    singleAttributePerLine: true,
    sortImports: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        singleQuote: true,
      },
    },
  ],
});
