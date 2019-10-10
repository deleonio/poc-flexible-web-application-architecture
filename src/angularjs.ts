import './angularjs.module';
import './components/app/component.angularjs';
import './components/input/component.angularjs';
import './components/series/create/component.angularjs';
import './components/series/edit/component.angularjs';
import './components/series/editor/component.angularjs';
import './components/series/list/component.angularjs';

import * as angular from 'angular';

import { APP_HTML_DIV_ELEMENT } from './shares/constant';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'AngularJS',
  version: angular.version.full
});
require('./shares/register');

angular.bootstrap(APP_HTML_DIV_ELEMENT, ['app']);
