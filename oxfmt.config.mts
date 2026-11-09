import yooOxfmtConfig from '@yoo-digital/oxfmt-config';
import { defineConfig } from 'oxfmt';

export default defineConfig({
  ...yooOxfmtConfig,
  // Formatted with prettier, as they are used to test the published prettier configuration
  ignorePatterns: ['packages/prettier/examples/**'],
});
