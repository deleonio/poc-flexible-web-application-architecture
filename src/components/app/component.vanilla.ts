import '../series/create/component.vanilla';
import '../series/list/component.vanilla';

import { RouterService } from '../../services/router/service';
import { VanillaComponent } from '../component.vanilla';
import { AppController } from './controller';

function render(component: AppComponent) {
  let html = `<div id="app">
  <h4>${component.$ctrl.framework.name}</h4>
  <small>${component.$ctrl.finishedRendering} ms upcomming time</small>`;
  if (component.resolvedRoute.url === 'series') {
    html += `<wc-list-serie></wc-list-serie>`;
  } else if (component.resolvedRoute.url === 'series/create') {
    html += `<wc-create-serie></wc-create-serie>`;
  } else if (component.resolvedRoute.url === 'series/edit') {
    html += `<wc-edit-serie></wc-edit-serie>`;
  }
  html += `<!-- small>${component.counter} s ticks</small -->
  <small>Used filters: ${component.$ctrl.filters.date(
    component.$ctrl.dummies.date
  )} | ${component.$ctrl.filters.currency(component.$ctrl.dummies.price)} €</small>
  </div>`;
  return html;
}

class AppComponent extends VanillaComponent {
  public readonly $ctrl: AppController = new AppController();
  public counter: number = 0;
  public resolvedRoute: any = {
    url: 'series'
  };

  public constructor() {
    super();
    RouterService.subscribe((route: any, params: any, query: any) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url
      };
      this.render();
    });
  }

  protected render() {
    this.dom.innerHTML = render(this);
  }
}
customElements.define('wc-app', AppComponent);

// const hackThis = window.customElements.get('wc-app');
// hackThis.prototype.render = function() {
//   this.dom.innerHTML =
//     render(this.$ctrl, this.counter) +
//     `<span style="color: red; background-color: yellow">Hacked (${this.counter} s)!</span>`;
// };
