import { h } from 'preact';

import { PreactComponent } from '../preact.component';
import { ListSerieComponent } from '../series/list/component.preact';
import { AppController } from './controller';

export class AppComponent extends PreactComponent {
  public constructor(props: any) {
    super(props, new AppController());
  }

  public render() {
    return (
      <div>
        <h4>{this.$ctrl.helloWorld}</h4>
        <small>
          {this.$ctrl.framework.name} v{this.$ctrl.framework.version} | {this.$ctrl.finishedRendering} ms upcomming time
        </small>
        <ListSerieComponent />
      </div>
    );
  }
}
