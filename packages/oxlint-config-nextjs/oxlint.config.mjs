// @ts-check
import reactConfig from '@yoo-digital/oxlint-config-react';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [reactConfig],
  plugins: ['nextjs'],
});
