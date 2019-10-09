import React, { Component, version } from 'react';
import { AppController } from './controller';

export class MyComponent extends Component {
  public $ctrl: any = new AppController();

  public render() {
    return (
      <div>
        <h4>{this.$ctrl.helloWorld}</h4>
        <small>
          React v{version} | {this.$ctrl.finishedRendering} ms upcomming time
        </small>
      </div>
    );
  }
}
