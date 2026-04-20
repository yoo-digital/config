# YOO Oxfmt Configuration

_This repo contains a reusable Oxfmt configuration for projects within YOO._

[![npm version](https://badge.fury.io/js/%40yoo-digital%2Foxfmt-config-base.svg)](https://www.npmjs.com/package/@yoo-digital/oxfmt-config-base)

## Introduction

The published package can be found in our npm organization [here (@yoo-digital)](https://www.npmjs.com/org/yoo-digital).

## Goal

The goal of this repository is to improve the developer experience within YOO, by offering a centralized repository containing files that are reused in the different projects. It should ensure that these projects follow a set of common and defined standards.

## Motivation

Every developer can and should contribute to this repository. It should be in everyone's interest to improve the developer experience within YOO. Amendments or changes can be introduced in our monthly guild meetings.

## Using the Configuration

Install the configuration:

```text
npm i @yoo-digital/oxfmt-config-base --save-dev
```

Reference the configuration in your `oxfmt.config.ts`:

```javascript
import baseConfig from '@yoo-digital/oxfmt-config-base';
import { defineConfig } from 'oxfmt';

export default defineConfig({
  ...baseConfig,
});
```

You can add any necessary overrides in your local configuration configuration.

**Note**: After updating the configuration, restart your IDE in order to enable the latest changes.

For a complete overview of configuration options please refer to the [official documentation](https://oxc.rs/docs/guide/usage/formatter/config-file-reference).
