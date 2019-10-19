import { ApplicationRef, Component } from '@angular/core';

import { RouterService } from '../../services/router/service';
import { AppController } from './controller';

@Component({
  selector: 'app',
  template: `
    <div id="app">
      <h4>{{ framework.name }} v{{ framework.version }}</h4>
      <small>{{ finishedRendering }} ms upcomming time</small>
      <list-serie *ngIf="resolvedRoute.url === 'series'"></list-serie>
      <create-serie *ngIf="resolvedRoute.url === 'series/create'"></create-serie>
      <edit-serie *ngIf="resolvedRoute.url === 'series/:id/edit'" [resolvedRoute]="resolvedRoute"></edit-serie>
    </div>
  `
})
export class AppComponent extends AppController {
  public resolvedRoute: any = {
    url: 'series'
  };

  public constructor(appRef: ApplicationRef) {
    super();
    RouterService.subscribe((route, ...args) => {
      this.resolvedRoute = {
        params: args[0],
        query: args[1],
        url: route.url
      };
      appRef.tick();
    });
  }
}
