# PoC - Flexible web application architecture

- [PoC - Flexible web application architecture](#poc---flexible-web-application-architecture)
  - [Motivation](#motivation)
  - [Introduction](#introduction)
    - [Tools](#tools)
    - [Frameworks](#frameworks)
  - [Installation](#installation)
  - [Guide](#guide)
    - [Usual usage without CLI](#usual-usage-without-cli)
      - [Serve](#serve)
      - [Build](#build)
    - [Command Line Interfaces](#command-line-interfaces)
      - [Angular CLI](#angular-cli)
      - [Vue CLI](#vue-cli)
  - [Open topics](#open-topics)
  - [References](#references)

## Motivation

This project demonstrate a scalable and flexible [Babel] and [Webpack] based web application architecture.

## Introduction

### Tools

| Tool         | Description |
| ------------ | :---------: |
| [Babel]      | Transpiler  |
| [Webpack]    |   Bundler   |
| [TypeScript] |  Language   |

### Frameworks

The selection of the following frameworks depends on this [benchmark](https://krausest.github.io/js-framework-benchmark/2019/table_chrome_77.html).

| Framework   | Description  |         Version         | Artefact size | Upcomming time |
| ----------- | :----------: | :---------------------: | ------------: | -------------: |
| [Angular]   | [SPA], [PWA] |           8.2           |      1,01 MiB |        ~125 ms |
| [AngularJS] |    [SPA]     |           1.7           |       195 KiB |         ~35 ms |
| [Inferno]   |    [SPA]     |           7.3           |      41.6 KiB |          ~3 ms |
| [Preact]    |    [SPA]     |          10.0           |      30.3 KiB |          ~3 ms |
| [React]     | [SPA], [PWA] |          16.10          |       151 KiB |          ~8 ms |
| [Vue]       | [SPA], [PWA] | 2.6 ([Composition API]) |      94.2 KiB |         ~10 ms |

## Installation

Run `yarn` / `npm install` in the bash. If there any problems with the installed dependencies, you can reinstall everything with `yarn reinstall` / `npm run reinstall`.

## Guide

### Usual usage without CLI

Normally the binaries `yarn` or `npm` are used to execute the scripts.

#### Serve

Currently the following frameworks are available:

- `angular`
- `angularjs`
- `inferno`
- `preact`
- `react`
- `vue`

Use this command to serve the application: `yarn serve <framework>[ --open]`

For example:
- `yarn serve inferno --open`
- `npm run serve inferno`

> The optional option `--open` open the app in you default browser.

#### Build

Use this command to build the application: `yarn build <framework>`

For example:
- `yarn build inferno`
- `npm run build inferno`

### Command Line Interfaces

#### Angular CLI

Currently the [Angular CLI] is supported.

#### Vue CLI

Currently the [Vue CLI] is **not** supported.

## Open topics

- Clean up the code for the architectural concept.
- Use observables to trigger rendering in correct cases.
- Add router to the application context.

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
[Angular CLI]: https://cli.angular.io
[Vue CLI]: https://cli.vuejs.org