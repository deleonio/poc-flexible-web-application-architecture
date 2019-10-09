# PoC - Flexible web application architecture

- [PoC - Flexible web application architecture](#poc---flexible-web-application-architecture)
  - [Motivation](#motivation)
  - [Introduction](#introduction)
    - [Tools](#tools)
    - [Frameworks](#frameworks)
  - [Installation](#installation)
  - [Guide](#guide)
    - [Serve](#serve)
    - [Build](#build)

## Motivation

This project demonstrate a flexible [Babel] and [Webpack] based web application architecture.

## Introduction

### Tools

| Tool         | Description |
| ------------ | :---------: |
| [Babel]      | Transpiler  |
| [Webpack]    |   Bundler   |
| [TypeScript] |  Language   |

### Frameworks

The selection of the frameworks depends on this [benchmark](https://krausest.github.io/js-framework-benchmark/2019/table_chrome_77.html).

| Framework   | Description |         Version         |
| ----------- | :---------: | :---------------------: |
| [Angular]   |    [SPA]    |           8.2           |
| [AngularJS] |    [SPA]    |           1.7           |
| [Inferno]   |    [SPA]    |           7.3           |
| [React]     |    [SPA]    |          16.10          |
| [Vue]       |    [SPA]    | 2.6 ([Composition API]) |

## Installation

Run `yarn install` in your command line interface. If you have problems with you installed dependencies, you can reinstall everything with `yarn reinstall`.

## Guide

### Serve

Currently the following frameworks are available: 
- `angular`
- `angularjs`
- `inferno`
- `react`
- `vue`

Use the this command to serve the application: `yarn serve <framework>`

For example: `yarn serve inferno`

### Build
Use the this command to build the application: `yarn build <framework>`

For example: `yarn build inferno`

[Babel]: https://babeljs.io
[TypeScript]: https:/typescriptlang.org
[Webpack]: https://webpack.js.org
[Angular]: https://angular.io
[AngularJS]: https://angularjs.org
[Inferno]: https://infernojs.org
[React]: https://reactjs.org
[Vue]: https://vuejs.org
[SPA]: https://en.wikipedia.org/wiki/Single-page_application
[Composition API]: https://vue-composition-api-rfc.netlify.com
[JS-Benchmark]: https://krausest.github.io/js-framework-benchmark/2019/table_chrome_77.html