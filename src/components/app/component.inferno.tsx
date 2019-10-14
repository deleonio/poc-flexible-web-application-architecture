import { InfernoComponent } from '../inferno.component';
import { ListSerieComponent } from '../series/list/component.inferno';
import { AppController } from './controller';

export class AppComponent extends InfernoComponent {
  public constructor(props: any) {
    super(props, new AppController());
  }

  public render() {
    return (
      <div id="app">
        <h4>
          {this.$ctrl.framework.name} v{this.$ctrl.framework.version}
        </h4>
        <small>{this.$ctrl.finishedRendering} ms upcomming time</small>
        <ListSerieComponent />
      </div>
    );
  }
}
