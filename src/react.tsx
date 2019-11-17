import React, { version } from 'react';
import ReactDOM from 'react-dom';

import { AppComponent } from './components/app/component.react';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'React',
  version
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#react');
htmlDivElement.style.display = 'inline';
ReactDOM.render(<AppComponent />, htmlDivElement);
