import { h, render } from 'preact';

import { AppComponent } from './components/app/component.preact';
import { APP_HTML_DIV_ELEMENT } from './shares/constant';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Preact',
  version: '10.0.0'
});
require('./shares/register');

render(<AppComponent />, APP_HTML_DIV_ELEMENT);
