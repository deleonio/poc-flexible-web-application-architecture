// Polyfills
import 'core-js/features/reflect';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './angular.module';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

const CONST = 5;
console.log(CONST);

platformBrowserDynamic().bootstrapModule(AppModule);
