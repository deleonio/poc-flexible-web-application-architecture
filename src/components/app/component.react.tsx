import React from 'react';

import { Route, RouterService } from '../../services/router/service';
import { ReactComponent } from '../react.component';
import { CreateSerieComponent } from '../series/create/component.react';
import { EditSerieComponent } from '../series/edit/component.react';
import { ListSerieComponent } from '../series/list/component.react';
import { AppController } from './controller';

export class AppComponent extends ReactComponent {
  private resolvedRoute: any = {
    url: 'series'
  };

  public constructor(props: any) {
    super(props, new AppController());
    RouterService.subscribe((route: any, params: any, query: any) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url
      };
      this.forceUpdate();
    });
  }

  public render() {
    return (
      <div id="app">
        <h4>
          {this.$ctrl.framework.name} v{this.$ctrl.framework.version}
        </h4>
        <small>{this.$ctrl.finishedRendering} ms upcomming time</small>
        {this.resolvedRoute.url === 'series' && <ListSerieComponent />}
        {this.resolvedRoute.url === 'series/create' && <CreateSerieComponent />}
        {this.resolvedRoute.url === 'series/:id/edit' && <EditSerieComponent resolvedRoute={this.resolvedRoute} />}
      </div>
    );
  }
}
