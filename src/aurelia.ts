import { Aurelia } from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
  aurelia.use.standardConfiguration().developmentLogging();

  aurelia.start().then(() => aurelia.setRoot('app', document.querySelector('div#aurelia')));
}
