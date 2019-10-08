import './angularjs.module';
import './component/app/component.angularjs';

import * as angular from 'angular';

import { APP_HTML_DIV_ELEMENT } from './constants';

const appTag: HTMLElement = document.createElement('app');
APP_HTML_DIV_ELEMENT.appendChild(appTag);

angular.bootstrap(APP_HTML_DIV_ELEMENT, ['app']);
