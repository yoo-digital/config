module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'color-hex-length': 'long',
    'comment-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {
      '/^border/': 'none',
    },
    'function-url-quotes': 'always',
    'font-weight-notation': 'numeric',
    'font-family-name-quotes': 'always-where-recommended',
    'max-nesting-depth': 3,
    // Configuration options:
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
    'order/order': [
      [
        'custom-properties',
        'declarations',
        'rules',
        'at-rules',
      ],
      {
        unspecified: 'ignore',
        disableFix: true,
      },
    ],
    'selector-class-pattern': [
      '^[a-z][a-z0-9-_]+$',
      {
        message: 'Expected class selector to be kebab-case or follow BEM __ --',
      },
    ],
    'selector-id-pattern': [
      '^[a-z][a-z0-9-_]+$',
      {
        message: 'Expected id selector to be kebab-case or follow BEM __ --',
      },
    ],
    'selector-attribute-quotes': 'always',
    'selector-max-compound-selectors': 4,
    'selector-max-id': 0,
    'selector-max-specificity': '0,4,1',
    'selector-max-type': [
      1,
      {
        ignoreTypes: ['/fieldset/'],
      },
    ],
    'selector-max-universal': 0,
    'selector-no-qualifying-type': true,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',

          // For webpack support:
          // https://til.hashrocket.com/posts/sxbrscjuqu-share-scss-variables-with-javascript
          'export',
        ],
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
      },
    ],
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
  },
  // Allow .camelCase for modules
  // See: https://github.com/stylelint/stylelint/issues/3259#issuecomment-656717023
  overrides: [
    {
      files: ['**/*.module.css'],
      rules: {
        'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$',
        'selector-id-pattern': '^[a-z][a-zA-Z0-9_-]+$',
      },
    },
  ],
};
