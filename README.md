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
  - [Testing](#testing)
    - [Unit-Test](#unit-test)
    - [Snapshot-Test](#snapshot-test)
    - [E2E-Test](#e2e-test)
  - [Open topics](#open-topics)
  - [References](#references)

## Motivation

This project demonstrate a scalable and flexible [Babel] and [Webpack] based web application architecture.

## Introduction

We write always the same application with different JavaScript-Frameworks. Here you can find a [Demo]-Link.

### Tools

| Tool         |   Description    |
| ------------ | :--------------: |
| [Babel]      |    Transpiler    |
| [Webpack]    |     Bundler      |
| [TypeScript] |     Language     |
| [Mocha]      | Unit-Test-Runner |
| [Chai]       |    Assertion     |
| [Nightwatch] | E2E-Test-Runner  |
| [NYC]        |  Code-Coverage   |

### Frameworks

The selection of the following frameworks depends on this [benchmark](https://krausest.github.io/js-framework-benchmark/2019/table_chrome_77.html).

| Framework         |     Description     |         Version         | Router\* | Artefact size | Upcomming time |
| ----------------- | :-----------------: | :---------------------: | :------: | ------------: | -------------: |
| [Angular]         | [SPA], [PWA], [SSR] |           8.2           |    ⌛     |      1.01 MiB |        ~125 ms |
| > ng build --prod |                     |                         |          |       ~602 kB |                |
| [AngularJS]       |    [SPA], [SSR]     |           1.7           |    ⌛     |       206 KiB |         ~35 ms |
| [Inferno]         |    [SPA], [SSR]     |           7.3           |    ⌛     |      52.7 KiB |          ~3 ms |
| [Preact]          |    [SPA], [SSR]     |          10.0           |    ⌛     |      41.3 KiB |          ~3 ms |
| [React]           | [SPA], [PWA], [SSR] |          16.10          |    ⌛     |       162 KiB |          ~8 ms |
| [Svelte]          |    [SPA], [SSR]     |          3.12           |    ⌛     |      32.2 KiB |          ~3 ms |
| [Vue]             | [SPA], [PWA], [SSR] | 2.6 ([Composition API]) |    ⌛     |       104 KiB |         ~10 ms |

> \* Router module exists but is not implemented.

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
- `svelte`
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

- `serve`
- `build[ --prod]`

#### Vue CLI

Currently the [Vue CLI] is **not** supported.

## Testing

### Unit-Test

Execute all unit tests with `yarn test` or `yarn test --watch`.

### Snapshot-Test

Currently **not** supported.

### E2E-Test

Execute all e2e tests with `yarn e2e`. Note that the application can be reached under http://localhost:8080 (e.g. `yarn serve preact`).

## Open topics

- <span style="color:grey">~~Clean up the code for the architectural concept.~~</span> <span style="color:green">✓</span>
- <span style="color:grey">~~Use observables to trigger rendering in correct cases.~~</span> <span style="color:green">✓</span>
- <span style="color:grey">~~Prepare the project for unit and e2e testing.~~</span> <span style="color:green">✓</span>
- Add router to the application context. ⌛
- Create a cheat sheet for the application architecture concept. ⌛

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
[angular cli]: https://cli.angular.io
[vue cli]: https://cli.vuejs.org
[svelte]: https://svelte.dev
[svelte-loader]: https://github.com/sveltejs/svelte-loader
[babel-loader]: https://github.com/babel/babel-loader
[ssr]: https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38
[demo]: http://github.modevel.de/poc
[mocha]: https://mochajs.org
[chai]: https://www.chaijs.com
[nightwatch]: https://nightwatchjs.org
[nyc]: https://istanbul.js.org
