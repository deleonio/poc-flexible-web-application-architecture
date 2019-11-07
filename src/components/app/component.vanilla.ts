import { AppController } from './controller';

class AppComponent extends HTMLElement {
  private readonly $ctrl: AppController = new AppController();
  private counter: number = 0;

  constructor() {
    super();
    this.attachShadow({ delegatesFocus: true, mode: 'open' });
    setInterval(() => {
      this.counter++;
      this.render();
    }, 1000);
  }

  private render() {
    this.shadowRoot.innerHTML = `<div id="app">
  <h4>${this.$ctrl.framework.name}</h4>
  <small>${this.$ctrl.finishedRendering} ms upcomming time</small><br>
  <small>${this.counter} s ticks</small>
</div>`;
  }
}
customElements.define('wc-app', AppComponent);

const hackThis = window.customElements.get('wc-app');
hackThis.prototype.render = function() {
  this.shadowRoot.innerHTML = `Putt (${this.counter} s)!`;
};
