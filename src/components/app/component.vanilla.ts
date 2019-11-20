import '../series/list/component.vanilla';

import { VanillaComponent } from '../component.vanilla';
import { AppController } from './controller';

function render($ctrl: any, counter: number) {
  return `<div id="app">
  <h4>${$ctrl.framework.name}</h4>
  <small>${$ctrl.finishedRendering} ms upcomming time</small>
  <wc-list-serie></wc-list-serie>
  <!-- small>${counter} s ticks</small -->
  </div>`;
}

class AppComponent extends VanillaComponent {
  private readonly $ctrl: AppController = new AppController();
  private counter: number = 0;

  protected render() {
    this.dom.innerHTML = render(this.$ctrl, this.counter);
  }
}
customElements.define('wc-app', AppComponent);

// const hackThis = window.customElements.get('wc-app');
// hackThis.prototype.render = function() {
//   this.dom.innerHTML =
//     render(this.$ctrl, this.counter) +
//     `<span style="color: red; background-color: yellow">Hacked (${this.counter} s)!</span>`;
// };
