# YOO TypeScript
_This monorepo contains configuration and helper files to bootstrap TypeScript projects @ YOO._

## Introduction
This monorepo is a private repository. However, it contains packages that are publicly published
to the npm registry.
The published packages can be found in our npm organization 
[here (@yoo-digital)](https://www.npmjs.com/org/yoo-digital).
We use [lerna](https://github.com/lerna/lerna) to reduce the burden of publishing the packages.

## Goal
The goal of this repository is to improve the developer experience @ YOO, by offering a centralized
repository containing files that are reused in the different projects. It should ensure that
these projects follow a set of common and defined standards.

## Motivation
Every developer can and should contribute to this repository. It should be in everyone's interest
to improve the developer experience @ YOO. Amendments or changes can be introduced in our
weekly guild meetings.

## Overview
At the moment the following packages are maintained in this repository:
* **@yoo-digital/eslint-config-base**: ESLint configuration file for TypeScript projects.
* **@yoo-digital/eslint-config-react**: ESLint configuration extending from base for React projects.
* **@yoo-digital/eslint-config-angular**: ESLint configuration extending from base for Angular projects.

## Coding Guidelines
You can find our coding guidelines regarding TypeScript on our private Confluence page [here](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).
Amendments and changes to these guidelines can be proposed on a weekly basis. The configuration files
and rules defined in the coding guidelines should be reflected in this repository.

## Development
If changes or additions have to be made, this repository will have to be cloned.

```text
git clone git@bitbucket.org:yooapps/yoo-digital-typescript.git
```

Make sure you have _lerna cli_ available by installing the dependencies of this repository.

```text
yarn install
```

### Publishing and Versioning
As stated in the introduction, [lerna](https://github.com/lerna/lerna) 
is used to publish the packages. Each package is versioned independently.
If changes are made to a package that is a dependant of other packages, the other packages
have to be newly published as well. For example, changing definitions within _eslint-config-base_ affects
both _eslint-config-react_ and _eslint-config-angular_ as they depend on _eslint-config-base_.

Like every other project, we follow the principles of Git flow. Respective _feature_ or _bugfix_ branches
are merged into _develop_ after peer developers have accepted the _pull request_. The latest commit should
always be on _master_, before publishing with `lerna publish`.
