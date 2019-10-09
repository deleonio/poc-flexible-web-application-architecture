import 'core-js';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './angular.module';
import { APP_HTML_DIV_ELEMENT } from './constants';

platformBrowserDynamic().bootstrapModule(AppModule);
