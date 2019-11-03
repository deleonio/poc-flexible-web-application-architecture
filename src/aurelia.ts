// export function configure(aurelia: Aurelia): void {
//   aurelia.use.standardConfiguration().developmentLogging();
//   aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app'), document.querySelector('div#aurelia')));
// }
import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

bootstrap((aurelia: Aurelia) => {
  aurelia.use.standardConfiguration().developmentLogging();

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app'), document.querySelector('div#aurelia')));
});
