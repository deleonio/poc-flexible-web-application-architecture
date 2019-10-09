import { render, version } from 'inferno';

import { MyComponent } from './components/app/component.inferno';
import { APP_HTML_DIV_ELEMENT } from './shares/constant';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Inferno',
  version: version
});
require('./shares/register');
render(<MyComponent />, APP_HTML_DIV_ELEMENT);
