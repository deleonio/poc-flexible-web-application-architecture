import React, { Component } from 'react';
import { AppController } from './controller';
import { InputComponent } from '../input/component.react';

export class AppComponent extends Component {
  public $ctrl: AppController = new AppController();

  public render() {
    return (
      <div>
        <h4>{this.$ctrl.helloWorld}</h4>
        <small>
          {this.$ctrl.framework.name} v{this.$ctrl.framework.version} | {this.$ctrl.finishedRendering} ms upcomming time
        </small>
        <InputComponent props={this.$ctrl.vornameProps} />
        <pre>{this.$ctrl.vornameProps.value}</pre>
      </div>
    );
  }
}
