import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration().developmentLogging();
  aurelia.start().then(() => {
    aurelia.setRoot(PLATFORM.moduleName('components/app/component.aurelia'), document.querySelector('div#aurelia'));
  });
}

bootstrap(configure);
