module.exports = {
  plugins: ['prettier-plugin-organize-attributes', '@trivago/prettier-plugin-sort-imports'],

  // prettier options
  singleQuote: true,
  singleAttributePerLine: true,

  // prettier-plugin-organize-attributes options
  attributeGroups: [
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ANGULAR_ELEMENT_REF',
    '$CODE_GUIDE',
    '$DEFAULT',
    '$ANGULAR_INPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT',
  ],

  // prettier-plugin-sort-imports options
  importOrder: ['^@', '^[a-zA-Z]', '^[./].*(?<!\\.s?css)$', '\\.s?css$'],
  importOrderParserPlugins: ['decorators', 'jsx', 'typescript'],

  overrides: [
    {
      files: ['**/*.scss', '**/*.css'],
      options: {
        singleQuote: false,
        printWidth: 100,
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
};
