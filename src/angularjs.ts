import * as angular from 'angular';

import './angularjs.module';
import { APP_HTML_DIV_ELEMENT } from './constants';

import './components/app/component.angularjs';

angular.bootstrap(APP_HTML_DIV_ELEMENT, ['app']);
