import React, { Component } from 'react';
import { AppController } from './controller';

export class MyComponent extends Component {
  public $ctrl: any = new AppController();

  public render() {
    return (
      <div>
        <h4>{this.$ctrl.helloWorld}</h4>
        <small>
          {this.$ctrl.framework.name} v{this.$ctrl.framework.version} | {this.$ctrl.finishedRendering} ms upcomming time
        </small>
      </div>
    );
  }
}
