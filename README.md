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
  - [References](#references)

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

| Framework   | Description |         Version         | Artefact size |
| ----------- | :---------: | :---------------------: | ------------: |
| [Angular]   |    [SPA]    |           8.2           |       1.17 MB |
| [AngularJS] |    [SPA]    |           1.7           |       0.20 MB |
| [Inferno]   |    [SPA]    |           7.3           |       0.04 MB |
| [React]     |    [SPA]    |          16.10          |       0.15 MB |
| [Vue]       |    [SPA]    | 2.6 ([Composition API]) |       0.94 MB |

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

## References

- https://github.com/infernojs/inferno-typescript-example
- https://medium.com/js-dojo/how-to-configure-webpack-4-with-vuejs-a-complete-guide-209e943c4772
- https://vue-composition-api-rfc.netlify.com/
- https://webpack.js.org/plugins/copy-webpack-plugin/
- https://webpack.js.org/plugins/html-webpack-plugin/
- https://vue-loader.vuejs.org/guide/
- https://webpack.js.org/configuration/
- https://webpack.js.org/configuration/dev-server/
- https://vuejs.org/v2/guide/#Getting-Started
- https://reactjs.org/docs/getting-started.html
- https://infernojs.org/docs/guides/getting-started
- https://angular.io/start
- https://docs.angularjs.org/misc/started
- https://babeljs.io/docs/en/configuration
- https://github.com/krausest/js-framework-benchmark

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