import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Aurelia',
  version: '1.3.1'
});
require('./shares/register');
require('./shares/routing');

export function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration().developmentLogging();
  aurelia.start().then(() => {
    aurelia.setRoot(PLATFORM.moduleName('components/app/component.aurelia'), document.querySelector('div#aurelia'));
  });
}

bootstrap(configure);
