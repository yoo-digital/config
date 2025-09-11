module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-disallowed-list': ['extend'],
    'at-rule-no-vendor-prefix': true,

    // See:
    // https://github.com/stylelint/stylelint/issues/5133
    // https://github.com/stylelint/stylelint/pull/5202#issuecomment-830668530
    // TODO: In the future @import statements have to be replaced by @use:
    // https://sass-lang.com/documentation/at-rules/import
    'no-invalid-position-at-import-rule': null,
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
        'dollar-variables',
        'custom-properties',
        {
          type: 'at-rule',
          name: 'include',
        },
        'declarations',
        'rules',
        {
          type: 'at-rule',
          name: 'container',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'up-to|at-least',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
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
    'scss/double-slash-comment-inline': [
      'never',
      {
        ignore: ['stylelint-commands'],
      },
    ],
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-whitespace-inside': [
      'always',
      {
        severity: 'warning',
      },
    ],
    'scss/selector-no-redundant-nesting-selector': true,
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
      files: ['**/*.module.scss'],
      rules: {
        'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$',
        'selector-id-pattern': '^[a-z][a-zA-Z0-9_-]+$',
      },
    },
  ],
};
