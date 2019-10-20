import { render, version } from 'inferno';

import { AppComponent } from './components/app/component.inferno';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Inferno',
  version
});
require('./shares/register');
require('./shares/routing');

render(<AppComponent />, document.querySelector('div#inferno'));
