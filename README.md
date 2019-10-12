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

| Framework   | Description  |         Version         | Artefact size |
| ----------- | :----------: | :---------------------: | ------------: |
| [Angular]   | [SPA], [PWA] |           8.2           |       1.06 MB |
| [AngularJS] |    [SPA]     |           1.7           |       0.20 MB |
| [Inferno]   |    [SPA]     |           7.3           |       0.04 MB |
| [Preact]    |    [SPA]     |          10.0           |       -.-- MB |
| [React]     | [SPA], [PWA] |          16.10          |       0.15 MB |
| [Vue]       | [SPA], [PWA] | 2.6 ([Composition API]) |       0.10 MB |

## Installation

Run `yarn` / `npm install` in your command line interface. If you have problems with you installed dependencies, you can reinstall everything with `yarn reinstall` / `npm run reinstall`.

## Guide

### Serve

Currently the following frameworks are available:

- `angular`
- `angularjs`
- `inferno`
- `preact`
- `react`
- `vue`

Use the this command to serve the application: `yarn serve <framework>[ --open]`

For example:
- `yarn serve inferno --open`
- `npm run serve inferno`

> The optional option `--open` open the app in you default browser.

### Build

Use the this command to build the application: `yarn build <framework>`

For example:
- `yarn build inferno`
- `npm run build inferno`

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
- https://preactjs.com/guide/v10/getting-started/

[babel]: https://babeljs.io
[typescript]: https:/typescriptlang.org
[webpack]: https://webpack.js.org
[angular]: https://angular.io
[angularjs]: https://angularjs.org
[inferno]: https://infernojs.org
[preact]: https://preactjs.com
[react]: https://reactjs.org
[vue]: https://vuejs.org
[spa]: https://en.wikipedia.org/wiki/Single-page_application
[pwa]: https://de.wikipedia.org/wiki/Progressive_Web_App
[composition api]: https://vue-composition-api-rfc.netlify.com
[js-benchmark]: https://krausest.github.io/js-framework-benchmark/2019/table_chrome_77.html
