// Polyfills
import 'core-js/features/reflect';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './angular.module';

platformBrowserDynamic().bootstrapModule(AppModule);
