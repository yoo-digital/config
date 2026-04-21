import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['react', 'react-perf', 'jsx-a11y'],
  categories: {
    correctness: 'off',
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    // react recommended rules
    'react/display-name': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',

    // react-hooks recommended rules
    'react/rules-of-hooks': 'error',
    'react/exhaustive-deps': 'warn',

    // react-perf recommended rules
    'react/only-export-components': ['error', { allowConstantExport: true }],

    // jsx-a11y recommended rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/autocomplete-valid': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/media-has-caption': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel'],
        allowExpressionValues: true,
      },
    ],
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',

    // jsx-a11y (correctness)
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        allowExpressionValues: true,
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],

    // react overrides
    'react/hook-use-state': 'warn',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'error',
    'react/no-array-index-key': 'warn',
    'react/self-closing-comp': 'error',

    // jsx-a11y overrides
    'react/button-has-type': 'error',
  },
});
