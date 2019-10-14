import './angularjs.module';
import './components/app/component.angularjs';
import './components/input/component.angularjs';
import './components/series/create/component.angularjs';
import './components/series/edit/component.angularjs';
import './components/series/editor/component.angularjs';
import './components/series/list/component.angularjs';

import * as angular from 'angular';

import { APP_HTML_ELEMENT } from './shares/constant';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'AngularJS',
  version: angular.version.full
});
require('./shares/register');

document.querySelector('div#angularjs').appendChild(APP_HTML_ELEMENT);
angular.bootstrap(document.querySelector('div#angularjs'), ['app']);
