# YOO Stylelint Configuration for Sass Projects

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Fstylelint-config-sass.svg)](https://www.npmjs.com/package/@yoo-digital/stylelint-config-sass)

Contains the settings and rules used for Sass/SCSS projects within YOO.
It is publicly available via the npm registry.

❗ Should be used in combination with our [Prettier config](https://github.com/yoo-digital/config/tree/main/packages/prettier).

## Motivation

Every developer can and should contribute to this repository. It should be in everyone's interest to improve the developer experience @ YOO. Amendments or changes can be introduced in our monthly guild meetings.

## Usage

**Be aware**: The _stylelint_ package is listed as a peer dependency. The versions might collide in your project. Always try to use the latest versions of _stylelint_ in your project. Please check the changelog to see which _stylelint_ version this package is compatible with.

After installing the packages, you can create a `.stylelintrc.js` file in the root of your project and add the following lines:

```javascript
module.exports = {
  extends: '@yoo-digital/stylelint-config-sass',
};
```

You can apply your own set of rules on top of that, but do not turn off any of the rules,
except it is an obstacle and making your life harder. Check the chapter below, for a complete set of rules
that can be applied.
