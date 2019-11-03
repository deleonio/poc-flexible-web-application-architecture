import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia: Aurelia): void {
  aurelia.use.standardConfiguration().developmentLogging();
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app'), document.querySelector('div#aurelia')));
}
