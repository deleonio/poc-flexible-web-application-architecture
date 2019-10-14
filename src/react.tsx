import React, { version } from 'react';
import ReactDOM from 'react-dom';

import { AppComponent } from './components/app/component.react';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'React',
  version
});
require('./shares/register');
ReactDOM.render(<AppComponent />, document.querySelector('div#react'));
