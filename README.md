# YOO Config Monorepo

_This repo contains eslint-configurations as well as a reusable prettier configuration for projects @ YOO._

## Content

| Package                                                           | NPM                                                                                                                                                     | Description                                  |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [eslint-config-base](packages/eslint-config-base/README.md)       | [![npm version](https://badge.fury.io/js/%40yoo-digital%2Feslint-config-base.svg)](https://www.npmjs.com/package/@yoo-digital/eslint-config-base)       | Base ESLint configuration for all projects   |
| [eslint-config-react](packages/eslint-config-react/README.md)     | [![npm version](https://badge.fury.io/js/%40yoo-digital%2Feslint-config-react.svg)](https://www.npmjs.com/package/@yoo-digital/eslint-config-react)     | ESLint configuration for React projects      |
| [eslint-config-angular](packages/eslint-config-angular/README.md) | [![npm version](https://badge.fury.io/js/%40yoo-digital%2Feslint-config-angular.svg)](https://www.npmjs.com/package/@yoo-digital/eslint-config-angular) | ESLint configuration for Angular projects    |
| [prettier](packages/prettier/README.md)                           | [![npm version](https://badge.fury.io/js/%40yoo-digital%2Fprettier.svg)](https://www.npmjs.com/package/@yoo-digital/prettier)                           | Reusable Prettier configuration for projects |

## Introduction

The published package can be found in our npm organization [@yoo-digital](https://www.npmjs.com/org/yoo-digital).

## Goal

The goal of this repository is to improve the developer experience @ YOO, by offering a centralized repository containing files that are reused in the different projects. It should ensure that these projects follow a set of common and defined standards.

## Motivation

Every developer can and should contribute to this repository. It should be in everyone's interest to improve the developer experience @ YOO. Amendments or changes can be introduced in our monthly guild meetings.

## Releasing packages

This repository uses [changesets](https://github.com/changesets/changesets) to manage the package versions, generate changelogs and publish the packages to NPM.

> A changeset is a markdown file that describes the changes made to the packages.
> One or more changesets are required to create a new release of the packages.

In order to create a new change run the following command:

```bash
npm run changeset
```

In the interactive prompt you select the packages that are affected by your changes and you select the version increments that are to be done for the individual packages (major, minor, patch).
You then provide a description of the changes made to the packages.

Multiple changesets can be included in a single release.
Every code change that requires a new release must have at least one changeset associated with it.

See [introduction to using changesets](https://github.com/changesets/changesets/blob/c7b6832a7a2783073e720d2085a546810e9b55eb/docs/intro-to-using-changesets.md)

### Versioning

Based on the types of changes in the changesets, the versioning is done according to [semver](https://semver.org/).
If multiple changesets are included in a single release, the highest version type is used for the release (major > minor > patch).
When changesets are merged into the `main` branch, the Changesets CI action will create a pull request to version the packages and generate the changelogs.

Manual versioning can be done with the following command (but should not be done manually in most cases):

```bash
npm run changeset:version
```

See [changesets versioning and publishing](https://github.com/changesets/changesets/blob/c7b6832a7a2783073e720d2085a546810e9b55eb/docs/intro-to-using-changesets.md#versioning-and-publishing)

### Changelogs

Changesets automatically generated changelog files for each package in markdown format.
The text in the changelog of a specific package is based on the description provided in the changesets that affect the package.

### Publishing

As soon as the packages are versioned and pushed to the `main` branch, the Changesets CI action will automatically publish the packages to NPM and create GitHub releases for the packages.

> ⚠️ If the package that is to be released must be built first, make sure to run the build command before running the publishing command.

```bash
npm run changeset:publish
```

See [changesets versioning and publishing](https://github.com/changesets/changesets/blob/c7b6832a7a2783073e720d2085a546810e9b55eb/docs/intro-to-using-changesets.md#versioning-and-publishing)

## Snapshot releases

It's possible to generate snapshot releases of the packages with a version number following the pattern `0.0.0-<branch>-<timestamp>`.
This is useful for testing purposes or for sharing the packages with other developers before they are released to the public.
Snapshot releases can be generated using the snapshot-release GitHub Action via a manual trigger, where the branch can be selected.
You can find the trigger in the [Actions tab](https://github.com/yoo-digital/config/actions) of this repository under the "Snapshot Release" workflow.

See [changesets snapshot releases](https://github.com/changesets/changesets/blob/c7b6832a7a2783073e720d2085a546810e9b55eb/docs/snapshot-releases.md)

## Canary releases

Canary releases can be done using the pre-release functionality of changesets.
Due to how the Changesets CI action works, pre-releases should not be done on the `main` branch, but rather on a feature branch.

Before merging your branch into the `main` branch, be sure to exit the pre-release mode by running the following command according to the docs.

See [changesets pre-releases](https://github.com/changesets/changesets/blob/c7b6832a7a2783073e720d2085a546810e9b55eb/docs/prereleases.md)
