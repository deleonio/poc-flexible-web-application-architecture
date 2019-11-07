import { Component, h, render } from 'preact';

import { AppComponent } from './components/app/component.preact';
import { DI } from './shares/injector';

// https://github.com/preactjs/preact/blob/master/README.md#debug-mode
if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

DI.register('Framework', {
  name: 'Preact',
  version: require('preact/package.json').version
});
require('./shares/register');
require('./shares/routing');

render(<AppComponent />, document.querySelector('div#preact'));
