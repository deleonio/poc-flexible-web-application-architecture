import { ApplicationRef, Component } from '@angular/core';

import { RouterService } from '../../services/router/service';
import { AppController } from './controller';
import { currency, date } from '@leanup/features/filters';

@Component({
  selector: 'app',
  template: `
    <div id="app">
      <h4>{{ framework.name }} v{{ framework.version }}</h4>
      <small>{{ finishedRendering }} ms upcomming time</small>
      <list-serie *ngIf="resolvedRoute.url === 'series'"></list-serie>
      <create-serie *ngIf="resolvedRoute.url === 'series/create'"></create-serie>
      <edit-serie *ngIf="resolvedRoute.url === 'series/:id/edit'" [resolvedRoute]="resolvedRoute"></edit-serie>
      <small>Used filters: {{ date(dummies.date) }} | {{ currency(dummies.price) }} €</small>
    </div>
  `,
})
export class AppComponent extends AppController {
  public currency = currency;
  public date = date;
  public resolvedRoute: any = {
    url: 'series',
  };

  public constructor(appRef: ApplicationRef) {
    super();
    RouterService.subscribe((route: any, params: any, query: any) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url,
      };
      appRef.tick();
    });
  }
}
