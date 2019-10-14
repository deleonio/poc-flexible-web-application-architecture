import React from 'react';

import { ReactComponent } from '../react.component';
import { ListSerieComponent } from '../series/list/component.react';
import { AppController } from './controller';

export class AppComponent extends ReactComponent {
  public constructor(props: any) {
    super(props, new AppController());
  }

  public render() {
    return (
      <div>
        <h4>
          {this.$ctrl.framework.name} v{this.$ctrl.framework.version}{' '}
        </h4>
        <small>{this.$ctrl.finishedRendering} ms upcomming time</small>
        <ListSerieComponent />
      </div>
    );
  }
}
