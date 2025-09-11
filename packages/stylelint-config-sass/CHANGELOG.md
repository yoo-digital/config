# Change log

## Version 3.0.0 (2024-02-22)
Make sure you install Stylelint v16. The migration guide can be found [here](https://stylelint.io/migration-guide/to-16/). In case you are still running v14, check the migration guide of [v15](https://stylelint.io/migration-guide/to-15). A bunch of stylistic/formatting linting rules were removed. We are no longer supporting these rules. Instead we recommend using our [Prettier config](https://github.com/yoo-digital/prettier) `@yoo-digital/prettier`.

- Updated to v16 of `stylelint`
- Removed dependency `stylelint-config-property-sort-order-smacss` in favor of `stylelint-order`. Property sorting following SMACSS standard is now covered by `@yoo-digital/prettier`. [More info](https://github.com/yoo-digital/prettier)


## Version 2.0.0
- Changed `order/order` rule: SCSS variables have to be defined before CSS custom properties. `$` has to come before `--`.


## Version 1.0.0
You will have to update to v1.0.0 in order to be compatible with stylelint v14 ([see migration guide](https://stylelint.io/migration-guide/to-14/)).

- Updated to v14 of `stylelint`
- Removed `stylelint-scss` peer-dependency in favor of `stylelint-config-standard-scss`
