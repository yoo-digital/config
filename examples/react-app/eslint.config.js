import yooEslintConfigReact from '@yoo-digital/eslint-config-react';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [...yooEslintConfigReact, reactRefresh.configs.vite];
