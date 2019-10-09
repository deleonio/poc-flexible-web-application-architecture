import React, { Component } from 'react';
import { AppController } from './controller';

export class MyComponent extends Component {
  public $ctrl: any = new AppController();

  render() {
    return <div>{this.$ctrl.helloWorld}</div>;
  }
}
