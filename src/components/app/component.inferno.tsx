import { Component } from 'inferno';

import { ListSerieComponent } from '../series/list/component.inferno';
import { AppController } from './controller';

export class AppComponent extends Component {
  public $ctrl: AppController = new AppController();

  public render() {
    return (
      <div>
        <h4>{this.$ctrl.helloWorld}</h4>
        <small>
          {this.$ctrl.framework.name} v{this.$ctrl.framework.version} | {this.$ctrl.finishedRendering} ms upcomming time
        </small>
        <ListSerieComponent />
        <pre>{this.$ctrl.vornameProps.value}</pre>
      </div>
    );
  }
}
