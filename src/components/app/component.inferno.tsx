import { Component } from 'inferno';
import { version } from 'inferno';
import { AppController } from './controller';

export class MyComponent extends Component {
  public $ctrl: any = new AppController();

  public render() {
    return (
      <div>
        <h4>{this.$ctrl.helloWorld}</h4>
        <small>
          Inferno v{version} | {this.$ctrl.finishedRendering} ms upcomming time
        </small>
      </div>
    );
  }
}
