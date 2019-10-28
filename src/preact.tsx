import { h, render } from 'preact';

import { AppComponent } from './components/app/component.preact';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Preact',
  version: '10.0.2'
});
require('./shares/register');
require('./shares/routing');

render(<AppComponent />, document.querySelector('div#preact'));
