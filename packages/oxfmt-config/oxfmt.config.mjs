// @ts-check
import { defineConfig } from 'oxfmt';

export default defineConfig({
  singleQuote: true,
  singleAttributePerLine: true,
  sortPackageJson: false,
  sortImports: {
    newlinesBetween: false,
  },
  associations: [
    {
      files: ['**/*.component.html', '**/src/app/**/*.html'],
      language: 'angular-html',
    },
  ],
  overrides: [
    {
      files: ['**/*.scss', '**/*.css'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['**/*.html'],
      options: {
        singleQuote: false,
        printWidth: 120,
      },
    },
  ],
});
