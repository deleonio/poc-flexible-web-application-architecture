import { h, Component, render } from 'preact';

import { AppComponent } from './components/app/component.preact';
import { DI } from './shares/injector';

// https://github.com/preactjs/preact/blob/master/README.md#debug-mode
if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

DI.register('Framework', {
  name: 'Preact',
  version: '10.0.2'
});
require('./shares/register');
require('./shares/routing');

render(<AppComponent />, document.querySelector('div#preact'));
