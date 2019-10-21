// Polyfills
import 'core-js/features/reflect';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './angular.module';
import { WEBPACK_MODE } from './shares/constant';

if (WEBPACK_MODE === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
